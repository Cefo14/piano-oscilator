import { PianoKeyPropTypes } from '../PianoKey/PianoKeyPropTypes';
import { SoundRegistry } from '../../helpers/SoundRegistry';

export interface PianoKeyEventPropTypes extends Pick<PianoKeyPropTypes, 'className' | 'children'> {
  keyLabel?: string;
  frequencyValue?: number;
  isSharp?: boolean,
  boardKey?: string,
  soundRegistry?: SoundRegistry,
}

export default PianoKeyEventPropTypes;
