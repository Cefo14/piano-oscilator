import { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';

import { HighContrast } from 'react-dial-knob';

import { PianoKeyEvent } from '../../components/PianoKeyEvent';
import { AudioVisualization } from '../../components/AudioVisualization';

import { OSCILLATOR_TYPE_VALUES } from '../../helpers/oscillatorTypes';

import {
  PIANO_SCALES,
  INITIAL_OSCILLATOR_TYPE_INDEX,
  INITIAL_GAIN_VALUE,
  MAX_GAIN_VALUE,
  KNOB_DIAMETER,
  KNOB_THEME,
  soundRegistry,
} from './config';

import './styles.css';

const Piano = () => {
  // eslint-disable-next-line max-len
  const [oscillatorTypeIndex, setFrequencyTypeIndex] = useState<number>(INITIAL_OSCILLATOR_TYPE_INDEX);
  const oscillatorType = OSCILLATOR_TYPE_VALUES[oscillatorTypeIndex - 1];

  const [gain, setGain] = useState<number>(INITIAL_GAIN_VALUE);

  const onValueChangeFrequencyTypeIndex = useCallback((value: number) => {
    setFrequencyTypeIndex(value);
  }, []);

  const onValueChangeGain = useCallback((value: number) => {
    setGain(value);
  }, []);

  useEffect(() => {
    soundRegistry.setOscillatorType(oscillatorType);
  }, [oscillatorType]);

  useEffect(() => {
    const realGain = (1 / MAX_GAIN_VALUE) * gain;
    soundRegistry.setGain(realGain);
  }, [gain]);

  return (
    <div className="Piano__container">
      <div className="Piano__panel">
        <div className="Piano__audio-visualization-container">
          <AudioVisualization
            width={450}
            height={150}
            audioAnalyser={soundRegistry.audioAnalyser}
          />
        </div>
        <div className="Piano__knobs-container">
          <div className="Piano__knob--hiddeText">
            <HighContrast
              diameter={KNOB_DIAMETER}
              value={oscillatorTypeIndex}
              min={1}
              max={OSCILLATOR_TYPE_VALUES.length}
              step={1}
              theme={KNOB_THEME}
              onValueChange={onValueChangeFrequencyTypeIndex}
            >
              <div className="Piano__knobs-label">
                { oscillatorType }
              </div>
            </HighContrast>
          </div>
          <HighContrast
            diameter={KNOB_DIAMETER}
            value={gain}
            min={0}
            max={MAX_GAIN_VALUE}
            step={1}
            theme={KNOB_THEME}
            onValueChange={onValueChangeGain}
          >
            <div className="Piano__knobs-label">
              Gain
            </div>
          </HighContrast>
        </div>
        <div className="Piano__title ">
          THE POWER
        </div>
      </div>
      <div className="Piano__keys-container">
        {
          PIANO_SCALES
            .map((pianoScale) => (
              <PianoKeyEvent
                key={pianoScale.label}
                keyLabel={pianoScale.label}
                frequencyValue={pianoScale.frecuency}
                isSharp={pianoScale.isSharp}
                className={clsx({
                  'Piano__key--sharp': pianoScale.isSharp,
                })}
                boardKey={pianoScale.boardKey}
                soundRegistry={soundRegistry}
              >
                <div className="Piano__key-label">
                  { pianoScale.label }
                </div>
                <div className="Piano__key-boardKey">
                  { pianoScale.boardKey }
                </div>
              </PianoKeyEvent>
            ))
        }
      </div>
    </div>
  );
};

export default Piano;
