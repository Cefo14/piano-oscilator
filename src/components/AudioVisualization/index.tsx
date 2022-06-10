import { memo, useRef, useEffect } from 'react';
import clsx from 'clsx';

import { AudioVisualizationPropTypes } from './AudioVisualizationPropTypes';
import './styles.css';

export const AudioVisualization = ({
  width = 300,
  height = 150,
  className,
  strokeStyle = '#FFF',
  lineWidth = 2,
  audioAnalyser,
}: AudioVisualizationPropTypes) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawWave = () => {
    if (!audioAnalyser) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bufferLength = audioAnalyser.frequencyBinCount;
    const timeData = new Uint8Array(audioAnalyser.frequencyBinCount);
    audioAnalyser.getByteTimeDomainData(timeData);

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.beginPath();

    const sliceWidth = canvasWidth / bufferLength;
    let x = 0;

    timeData.forEach((data, i) => {
      const v = data / 128;
      const y = (v * canvasHeight) / 2;

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);

      x += sliceWidth;
    });

    ctx.stroke();
  };

  useEffect(() => {
    const draw = () => {
      drawWave();
      return requestAnimationFrame(draw);
    };

    const animation = draw();

    return () => {
      cancelAnimationFrame(animation);
    };
  }, [
    strokeStyle,
    lineWidth,
    audioAnalyser,
  ]);

  return (
    <canvas
      data-testid="AudioVisualization"
      ref={canvasRef}
      width={width}
      height={height}
      className={clsx(
        'AudioVisualization__canvas',
        className,
      )}
    />
  );
};

export default memo(AudioVisualization);
