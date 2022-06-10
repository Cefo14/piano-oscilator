import { PIANO_SCALE_VALUES, PianoScale } from '../../helpers/pianoScales';
import { SoundRegistry } from '../../helpers/SoundRegistry';

const KEY_KEYBOARD = [
  'a',
  'w',
  's',
  'e',
  'd',
  'f',
  't',
  'g',
  'y',
  'h',
  'u',
  'j',
  'k',
  'o',
  'l',
  'p',
  ';',
] as const;

export const soundRegistry = new SoundRegistry();

export type PianoScaleKeyboard = {
  boardKey: string;
  isSharp: boolean;
} & PianoScale;

export const PIANO_SCALES: PianoScaleKeyboard[] = PIANO_SCALE_VALUES
  .filter((pianoScaleValue) => (
    pianoScaleValue.octave >= 2
    && pianoScaleValue.octave <= 3
  ))
  .slice(0, KEY_KEYBOARD.length)
  .map((pianoScale, index) => ({
    ...pianoScale,
    boardKey: KEY_KEYBOARD[index],
    isSharp: pianoScale.label.includes('#'),
  }));

export const INITIAL_OSCILLATOR_TYPE_INDEX = 1 as const;

export const INITIAL_GAIN_VALUE = 25 as const;

export const MAX_GAIN_VALUE = 100 as const;

export const KNOB_DIAMETER = 75 as const;

export const KNOB_THEME = {
  defaultColor: '#000',
  activeColor: '#000',
} as const;
