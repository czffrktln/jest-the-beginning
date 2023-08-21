const monkeyTalk = require('./monkeyTalk')

const str1 = ""
const str2 = "Tommy"
const str3 = "Choose rotting away at the end of it all"
const str4 = "Choose Life. Choose a job. Choose a career. Choose a family."

test('an empty string', () => {
  expect(monkeyTalk(str1)).toBe("Ook.")
});
test('a string with a single word', () => {
  expect(monkeyTalk(str2)).toBe("Ook.")
});
test('a string with multiple words starting with vowels ', () => {
  expect(monkeyTalk(str3)).toBe("Ook ook eek eek ook eek eek eek eek.")
});
test('a string with multiple punctuation marks', () => {
  expect(monkeyTalk(str4)).toBe("Ook ook ook eek ook ook eek ook ook eek ook.")
});