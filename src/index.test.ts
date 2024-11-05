import { toUpperCase } from ".";
import { toLowerCase } from ".";

test('converts all text to uppercase', () => {
  expect(toUpperCase('hello')).toBe('HELLO');
});

test('converts all text to lowercase', () => {
  expect(toLowerCase('HELLO')).toBe('hello');
});

test('converts some text to uppercase', () => {
  expect(toUpperCase('hELLO')).toBe('HELLO');
});

test('converts some text to lowercase', () => {
  expect(toLowerCase('Hello')).toBe('hello');
});

