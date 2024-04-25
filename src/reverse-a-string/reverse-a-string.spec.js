// #todo

/**
 * Reverses a string.
 * @param {string} [toReverse] - The string to reverse.
 * @returns {string} The reversed argument, or an empty string if undefined.
 */

// -------- your solutions --------
const reverseString = (toReverse) => {
  return toReverse.split('').reverse().join('');
};

// minified solution for testing your tests
// prettier-ignore
/**
 *
 * @param a
 */
function secretSolution(a = '') { if (typeof a !== 'string') throw new TypeError('toReverse is not a string'); return a.split('').reverse().join(''); }

for (const solution of [secretSolution, reverseString]) {
  // the main test suite for the function
  describe(`${solution.name}: reverses a string`, () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    it('a string with all small letters', () => {
      expect(solution('asdf')).toEqual('fdsa');
    });
    it('a string with combination of capital and small letters', () => {
      expect(solution('HeLLo')).toEqual('oLLeH');
    });
    it('a sentence', () => {
      expect(solution('HELLO world')).toEqual('dlrow OLLEH');
    });
    it('a number -> throws error', () => {
      expect(() => solution(1)).toThrow();
    });
    it('a boolean -> throws error', () => {
      expect(() => solution(true)).toThrow();
    });
    it('null -> throws an error', () => {
      expect(() => solution(null)).toThrowError();
    });
    it('NaN -> throws error', () => {
      expect(() => solution(NaN)).toThrow();
    });
    it('Infinity -> throws error', () => {
      expect(() => solution(Infinity)).toThrow();
    });
    it('[] -> throws error', () => {
      expect(() => solution([])).toThrow();
    });
    it('function -> throws error', () => {
      expect(() => solution(() => {})).toThrow();
    });
  });
}
