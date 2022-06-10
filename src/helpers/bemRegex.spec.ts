import { BEM_REGEX } from './bemRegex';

describe('bemRegex', () => {
  describe('when selectors are valid', () => {
    it('should to be ok', () => {
      expect(BEM_REGEX.test('.Component')).toBeTruthy();
      expect(BEM_REGEX.test('.Component__element')).toBeTruthy();
      expect(BEM_REGEX.test('.Component__element--mod')).toBeTruthy();
      expect(BEM_REGEX.test('.Component--mod')).toBeTruthy();
      expect(BEM_REGEX.test('.Component-element')).toBeTruthy();
    });
  });

  describe('when selectors are invalid', () => {
    it('should not be ok', () => {
      expect(BEM_REGEX.test('.Component-')).toBeFalsy();
      expect(BEM_REGEX.test('.Component__')).toBeFalsy();
      expect(BEM_REGEX.test('.Component--')).toBeFalsy();
      expect(BEM_REGEX.test('.Component__element--')).toBeFalsy();
    });
  });
});
