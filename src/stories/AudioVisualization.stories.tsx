import { Meta, Story } from '@storybook/react/types-6-0';

import { AudioVisualization } from '../components/AudioVisualization';
import { AudioVisualizationPropTypes } from '../components/AudioVisualization/AudioVisualizationPropTypes';

export default {
  title: 'AudioVisualization',
  component: AudioVisualization,
} as Meta<AudioVisualizationPropTypes>;

// eslint-disable-next-line max-len
const Template: Story<AudioVisualizationPropTypes> = (props) => <AudioVisualization {...props} />;

export const Default = Template.bind({});
