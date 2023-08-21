const {palindromeChainLength, isPalindrome, reverseNumber} = require('./palindromeChainLength');
// const isPalindrome = require('./isPalindrome');
// const reverseNumber = require('./reverseNumber');

const num1 = 569874;
const num2 = 6321236321236;
const num3 = 63216321;
const num4 = 1;
const num5 = 12;
const num6 = 89;
const num7 = 196;

test('reverseNumber function', () => {
  expect(reverseNumber(num1)).toBe(478965)
});

test('isPalindrome function', () => {
  expect(isPalindrome(num2)).toBe(true)
});

test('isPalindrome function', () => {
  expect(isPalindrome(num3)).toBe(false)
});

test('it takes 0 iterations to get a palindrome', () => {
  expect(palindromeChainLength(num4)).toBe(0)
});

test('it takes 1 iteration to get a palindrome', () => {
  expect(palindromeChainLength(num5)).toBe(1)
});

test('it takes large number (e.g. 24) iterations to get a palindrome', () => {
  expect(palindromeChainLength(num6)).toBe(24)
});

test('the number cannot be made into a palindrome and throws an error', () => {
  expect(() => palindromeChainLength(num7).toThrow('Number is too big or a Lychrel number!'))
});