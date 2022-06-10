type PianoScaleValue = 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | 'B';
export type PianoScaleKey = `${PianoScaleValue}${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7}`;

export type PianoScale = {
  frecuency: number;
  label: PianoScaleKey;
  octave: number;
};

export type PianoScaleGroup = {
  [key in PianoScaleKey]: PianoScale;
};

export const PIANO_SCALE_VALUES: PianoScale[] = [
  {
    frecuency: 16.35,
    label: 'C0',
    octave: 0,
  },
  {
    frecuency: 17.32,
    label: 'C#0',
    octave: 0,
  },
  {
    frecuency: 18.35,
    label: 'D0',
    octave: 0,
  },
  {
    frecuency: 19.45,
    label: 'D#0',
    octave: 0,
  },
  {
    frecuency: 20.6,
    label: 'E0',
    octave: 0,
  },
  {
    frecuency: 21.83,
    label: 'F0',
    octave: 0,
  },
  {
    frecuency: 23.12,
    label: 'F#0',
    octave: 0,
  },
  {
    frecuency: 24.5,
    label: 'G0',
    octave: 0,
  },
  {
    frecuency: 25.96,
    label: 'G#0',
    octave: 0,
  },
  {
    frecuency: 27.5,
    label: 'A0',
    octave: 0,
  },
  {
    frecuency: 29.14,
    label: 'A#0',
    octave: 0,
  },
  {
    frecuency: 30.87,
    label: 'B0',
    octave: 0,
  },
  {
    frecuency: 32.7,
    label: 'C1',
    octave: 1,
  },
  {
    frecuency: 34.65,
    label: 'C#1',
    octave: 1,
  },
  {
    frecuency: 36.71,
    label: 'D1',
    octave: 1,
  },
  {
    frecuency: 38.89,
    label: 'D#1',
    octave: 1,
  },
  {
    frecuency: 41.2,
    label: 'E1',
    octave: 1,
  },
  {
    frecuency: 43.65,
    label: 'F1',
    octave: 1,
  },
  {
    frecuency: 46.25,
    label: 'F#1',
    octave: 1,
  },
  {
    frecuency: 49,
    label: 'G1',
    octave: 1,
  },
  {
    frecuency: 51.91,
    label: 'G#1',
    octave: 1,
  },
  {
    frecuency: 55,
    label: 'A1',
    octave: 1,
  },
  {
    frecuency: 58.27,
    label: 'A#1',
    octave: 1,
  },
  {
    frecuency: 61.74,
    label: 'B1',
    octave: 1,
  },
  {
    frecuency: 65.41,
    label: 'C2',
    octave: 2,
  },
  {
    frecuency: 69.3,
    label: 'C#2',
    octave: 2,
  },
  {
    frecuency: 73.42,
    label: 'D2',
    octave: 2,
  },
  {
    frecuency: 77.78,
    label: 'D#2',
    octave: 2,
  },
  {
    frecuency: 82.41,
    label: 'E2',
    octave: 2,
  },
  {
    frecuency: 87.31,
    label: 'F2',
    octave: 2,
  },
  {
    frecuency: 92.5,
    label: 'F#2',
    octave: 2,
  },
  {
    frecuency: 98,
    label: 'G2',
    octave: 2,
  },
  {
    frecuency: 103.83,
    label: 'G#2',
    octave: 2,
  },
  {
    frecuency: 110,
    label: 'A2',
    octave: 2,
  },
  {
    frecuency: 116.54,
    label: 'A#2',
    octave: 2,
  },
  {
    frecuency: 123.47,
    label: 'B2',
    octave: 2,
  },
  {
    frecuency: 130.81,
    label: 'C3',
    octave: 3,
  },
  {
    frecuency: 138.59,
    label: 'C#3',
    octave: 3,
  },
  {
    frecuency: 146.83,
    label: 'D3',
    octave: 3,
  },
  {
    frecuency: 155.56,
    label: 'D#3',
    octave: 3,
  },
  {
    frecuency: 164.81,
    label: 'E3',
    octave: 3,
  },
  {
    frecuency: 174.61,
    label: 'F3',
    octave: 3,
  },
  {
    frecuency: 185,
    label: 'F#3',
    octave: 3,
  },
  {
    frecuency: 196,
    label: 'G3',
    octave: 3,
  },
  {
    frecuency: 207.65,
    label: 'G#3',
    octave: 3,
  },
  {
    frecuency: 220,
    label: 'A3',
    octave: 3,
  },
  {
    frecuency: 233.08,
    label: 'A#3',
    octave: 3,
  },
  {
    frecuency: 246.94,
    label: 'B3',
    octave: 3,
  },
  {
    frecuency: 261.63,
    label: 'C4',
    octave: 4,
  },
  {
    frecuency: 277.18,
    label: 'C#4',
    octave: 4,
  },
  {
    frecuency: 293.66,
    label: 'D4',
    octave: 4,
  },
  {
    frecuency: 311.13,
    label: 'D#4',
    octave: 4,
  },
  {
    frecuency: 329.63,
    label: 'E4',
    octave: 4,
  },
  {
    frecuency: 349.23,
    label: 'F4',
    octave: 4,
  },
  {
    frecuency: 369.99,
    label: 'F#4',
    octave: 4,
  },
  {
    frecuency: 392,
    label: 'G4',
    octave: 4,
  },
  {
    frecuency: 415.3,
    label: 'G#4',
    octave: 4,
  },
  {
    frecuency: 440,
    label: 'A4',
    octave: 4,
  },
  {
    frecuency: 466.16,
    label: 'A#4',
    octave: 4,
  },
  {
    frecuency: 493.88,
    label: 'B4',
    octave: 4,
  },
  {
    frecuency: 523.25,
    label: 'C5',
    octave: 5,
  },
  {
    frecuency: 554.37,
    label: 'C#5',
    octave: 5,
  },
  {
    frecuency: 587.33,
    label: 'D5',
    octave: 5,
  },
  {
    frecuency: 622.25,
    label: 'D#5',
    octave: 5,
  },
  {
    frecuency: 659.26,
    label: 'E5',
    octave: 5,
  },
  {
    frecuency: 698.46,
    label: 'F5',
    octave: 5,
  },
  {
    frecuency: 739.99,
    label: 'F#5',
    octave: 5,
  },
  {
    frecuency: 783.99,
    label: 'G5',
    octave: 5,
  },
  {
    frecuency: 830.61,
    label: 'G#5',
    octave: 5,
  },
  {
    frecuency: 880,
    label: 'A5',
    octave: 5,
  },
  {
    frecuency: 932.33,
    label: 'A#5',
    octave: 5,
  },
  {
    frecuency: 987.77,
    label: 'B5',
    octave: 5,
  },
  {
    frecuency: 1046.5,
    label: 'C6',
    octave: 6,
  },
  {
    frecuency: 1108.73,
    label: 'C#6',
    octave: 6,
  },
  {
    frecuency: 1174.66,
    label: 'D6',
    octave: 6,
  },
  {
    frecuency: 1244.51,
    label: 'D#6',
    octave: 6,
  },
  {
    frecuency: 1318.51,
    label: 'E6',
    octave: 6,
  },
  {
    frecuency: 1396.91,
    label: 'F6',
    octave: 6,
  },
  {
    frecuency: 1479.98,
    label: 'F#6',
    octave: 6,
  },
  {
    frecuency: 1567.98,
    label: 'G6',
    octave: 6,
  },
  {
    frecuency: 1661.22,
    label: 'G#6',
    octave: 6,
  },
  {
    frecuency: 1760,
    label: 'A6',
    octave: 6,
  },
  {
    frecuency: 1864.66,
    label: 'A#6',
    octave: 6,
  },
  {
    frecuency: 1975.53,
    label: 'B6',
    octave: 6,
  },
  {
    frecuency: 2093,
    label: 'C7',
    octave: 7,
  },
  {
    frecuency: 2217.46,
    label: 'C#7',
    octave: 7,
  },
  {
    frecuency: 2349.32,
    label: 'D7',
    octave: 7,
  },
  {
    frecuency: 2489.02,
    label: 'D#7',
    octave: 7,
  },
  {
    frecuency: 2637.02,
    label: 'E7',
    octave: 7,
  },
  {
    frecuency: 2793.83,
    label: 'F7',
    octave: 7,
  },
  {
    frecuency: 2959.96,
    label: 'F#7',
    octave: 7,
  },
  {
    frecuency: 3135.96,
    label: 'G7',
    octave: 7,
  },
  {
    frecuency: 3322.44,
    label: 'G#7',
    octave: 7,
  },
  {
    frecuency: 3520,
    label: 'A7',
    octave: 7,
  },
  {
    frecuency: 3729.31,
    label: 'A#7',
    octave: 7,
  },
  {
    frecuency: 3951.07,
    label: 'B7',
    octave: 7,
  },
];

export const PIANO_SCALES: PianoScaleGroup = PIANO_SCALE_VALUES.reduce<PianoScaleGroup>(
  (prev, next) => ({
    ...prev,
    [next.label]: next,
  }),
  {} as PianoScaleGroup,
);
