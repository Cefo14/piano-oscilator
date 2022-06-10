import {
  memo,
  useEffect,
  useCallback,
  useState,
} from 'react';

import { PianoKey } from '../PianoKey';
import { PianoKeyEventPropTypes } from './PianoKeyEventPropTypes';

export const PianoKeyEvent = ({
  className,
  children,
  isSharp = false,
  keyLabel = '',
  frequencyValue = 0,
  boardKey = '',
  soundRegistry,
}: PianoKeyEventPropTypes) => {
  const [isActive, setIsActive] = useState(false);

  const startSound = useCallback(() => {
    if (soundRegistry) soundRegistry.startSound(keyLabel);
    setIsActive(true);
  }, [soundRegistry, keyLabel]);

  const stopSound = useCallback(() => {
    if (soundRegistry) soundRegistry.stopSound(keyLabel);
    setIsActive(false);
  }, [soundRegistry, keyLabel]);

  const onKeyDownStartSound = useCallback((e: KeyboardEvent) => {
    const key = e.key.toLowerCase();
    if (key === boardKey) startSound();
  }, [boardKey, startSound]);

  const onKeyUpStopSound = useCallback((e: KeyboardEvent) => {
    const key = e.key.toLowerCase();
    if (key === boardKey) stopSound();
  }, [boardKey, stopSound]);

  useEffect(() => {
    if (soundRegistry) soundRegistry.register(keyLabel, frequencyValue);
  }, [soundRegistry, keyLabel, frequencyValue]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDownStartSound);
    return () => {
      window.removeEventListener('keydown', onKeyDownStartSound);
    };
  }, [onKeyDownStartSound]);

  useEffect(() => {
    window.addEventListener('keyup', onKeyUpStopSound);
    return () => {
      window.removeEventListener('keyup', onKeyUpStopSound);
    };
  }, [onKeyUpStopSound]);

  return (
    <PianoKey
      className={className}
      isSharp={isSharp}
      isActive={isActive}
      onMouseDownCapture={startSound}
      onMouseUpCapture={stopSound}
      onMouseLeave={stopSound}
      onTouchStartCapture={startSound}
      onTouchEndCapture={stopSound}
      onTouchCancelCapture={stopSound}
    >
      { children }
    </PianoKey>
  );
};

export default memo(PianoKeyEvent);
