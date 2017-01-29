import {isDev} from '../../../shared/helpers/browser';

test('Helper: isDev', () => {
  expect(isDev()).toBe(true);
  expect(isDev({
    hostname: 'localhost',
  })).toBe(true);
  expect(isDev({
    hostname: 'abc',
  })).toBe(false);
});
