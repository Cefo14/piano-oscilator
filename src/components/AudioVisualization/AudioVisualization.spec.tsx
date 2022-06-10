import { render, screen } from '@testing-library/react';
import { AudioVisualization } from '.';

describe('AudioVisualization component', () => {
  describe('when it has no properties', () => {
    it('should the component be in the document', () => {
      render(<AudioVisualization />);
      const element = screen.getByTestId('AudioVisualization');
      expect(element).toBeInTheDocument();
    });
  });
});
