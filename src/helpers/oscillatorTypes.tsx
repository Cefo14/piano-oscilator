export type OscillatorTypeCustom = Exclude<OscillatorType, 'custom'>;
export type OscillatorTypeGroup = {
  [key in OscillatorTypeCustom]: OscillatorTypeCustom;
};

export const OSCILLATOR_TYPES: OscillatorTypeGroup = {
  sawtooth: 'sawtooth',
  sine: 'sine',
  square: 'square',
  triangle: 'triangle',
};

export const OSCILLATOR_TYPE_VALUES: OscillatorTypeCustom[] = Object.values(OSCILLATOR_TYPES);
