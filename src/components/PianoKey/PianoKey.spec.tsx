import { render, screen } from '@testing-library/react';
import { PianoKey } from '.';

describe('PianoKey component', () => {
  describe('when it has no properties', () => {
    it('should the component be in the document', () => {
      render(<PianoKey />);
      const element = screen.getByTestId('PianoKey');
      expect(element).toBeInTheDocument();
    });
  });
});
