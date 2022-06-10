import { HTMLProps } from 'react';

export interface AudioVisualizationPropTypes
  extends Pick<HTMLProps<HTMLCanvasElement>, 'className' | 'width' | 'height'> {
  strokeStyle?: string;
  lineWidth?: number;
  audioAnalyser?: AnalyserNode;
}

export default AudioVisualizationPropTypes;
