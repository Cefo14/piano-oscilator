import { HTMLProps } from 'react';

export interface PianoKeyPropTypes extends
  Pick<HTMLProps<HTMLButtonElement>,
  'className'
  | 'children'
  | 'onMouseDownCapture'
  | 'onMouseUpCapture'
  | 'onMouseLeave'
  | 'onTouchStartCapture'
  | 'onTouchEndCapture'
  | 'onTouchCancelCapture'
  > {
  isSharp?: boolean,
  isActive?: boolean,
}

export default PianoKeyPropTypes;
