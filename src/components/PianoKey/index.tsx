import { memo } from 'react';
import clsx from 'clsx';

import { PianoKeyPropTypes } from './PianoKeyPropTypes';
import './styles.css';

export const PianoKey = ({
  className,
  children,
  onMouseDownCapture,
  onMouseUpCapture,
  onMouseLeave,
  onTouchStartCapture,
  onTouchEndCapture,
  onTouchCancelCapture,
  isSharp = false,
  isActive = false,
}: PianoKeyPropTypes) => (
  <button
    data-testid="PianoKey"
    type="button"
    className={clsx(
      'PianoKey__key',
      'PianoKey__key--white',
      {
        'PianoKey__key--sharp': isSharp,
        'PianoKey__key--active': isActive,
      },
      className,
    )}
    onMouseDownCapture={onMouseDownCapture}
    onMouseUpCapture={onMouseUpCapture}
    onMouseLeave={onMouseLeave}
    onTouchStartCapture={onTouchStartCapture}
    onTouchEndCapture={onTouchEndCapture}
    onTouchCancelCapture={onTouchCancelCapture}
  >
    { children }
  </button>
);

export default memo(PianoKey);
