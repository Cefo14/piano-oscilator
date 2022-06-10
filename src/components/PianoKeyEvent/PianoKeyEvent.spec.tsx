import { render, screen } from '@testing-library/react';
import { PianoKeyEvent } from '.';

describe('PianoKeyEvent component', () => {
  describe('when it has no properties', () => {
    it('should the component be in the document', () => {
      render(<PianoKeyEvent />);
      const element = screen.getByTestId('PianoKey');
      expect(element).toBeInTheDocument();
    });
  });
});
