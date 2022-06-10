import { Meta, Story } from '@storybook/react/types-6-0';

import { PianoKey } from '../components/PianoKey';
import { PianoKeyPropTypes } from '../components/PianoKey/PianoKeyPropTypes';

export default {
  title: 'PianoKey',
  component: PianoKey,
} as Meta<PianoKeyPropTypes>;

const Template: Story<PianoKeyPropTypes> = (props) => <PianoKey {...props} />;

export const Default = Template.bind({});
