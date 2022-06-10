import { OscillatorTypeCustom, OSCILLATOR_TYPES } from './oscillatorTypes';

export class SoundRegistry {
  private sounds: Map<string, {
    frecuency: number,
    oscillator: OscillatorNode,
    gain: GainNode,
    hasStarted: boolean,
  }> = new Map();

  private readonly audioContext: AudioContext = new AudioContext();

  public readonly audioAnalyser: AnalyserNode = this.audioContext.createAnalyser();

  private oscillatorType: OscillatorTypeCustom = OSCILLATOR_TYPES.sine;

  private gain: number = 0.1;

  setOscillatorType(oscillatorType: OscillatorTypeCustom) {
    this.oscillatorType = oscillatorType;
  }

  setGain(gain: number) {
    this.gain = gain;
  }

  has(key: string): boolean {
    return this.sounds.has(key);
  }

  register(
    key: string,
    frequencyValue: number,
  ) {
    const audioOscillator = this.audioContext.createOscillator();
    const audioGain = this.audioContext.createGain();

    audioOscillator.type = this.oscillatorType;
    audioOscillator.frequency.value = frequencyValue;
    audioOscillator.connect(audioGain);

    audioGain.gain.value = 0;
    audioGain.connect(this.audioContext.destination);
    audioGain.connect(this.audioAnalyser);

    const newSound = {
      frecuency: frequencyValue,
      oscillator: audioOscillator,
      gain: audioGain,
      hasStarted: false,
    };

    this.sounds.set(key, newSound);
  }

  async startSound(key: string): Promise<void> {
    const sound = this.sounds.get(key);
    if (!sound) return;

    const audioOscillator = sound.oscillator;
    audioOscillator.type = this.oscillatorType;

    const audioGain = sound.gain;
    audioGain.gain.value = this.gain;

    if (!sound.hasStarted) {
      await this.audioContext.resume();
      audioOscillator.start();
      sound.hasStarted = true;
    }
  }

  stopSound(key: string): void {
    const sound = this.sounds.get(key);
    if (!sound) return;

    const audioGain = sound.gain;
    audioGain.gain.value = 0;
  }
}

export default SoundRegistry;
