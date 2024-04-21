/**
 * reverses a string
 * @param {string} [toReverse] - the string to reverse
 * @returns {string} the reversed argument, or an empty string if undefined
 */

// -------- your solutions --------
const reverseString = (toReverse) => {
  return toReverse.split('').reverse().join('');
};

// eslint-disable-next-line no-use-before-define
for (const solution of [secretSolution, reverseString]) {
  // the main test suite for the function
  describe(`${solution.name}: reverses a string`, () => {
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

// minified solution for testing your tests
// prettier-ignore
/**
 *
 */
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
