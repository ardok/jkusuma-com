// @flow
import { isDev } from '../env';

test('Helper browser: isDev', () => {
  const origWindowLocation = window.location;
  delete window.location;

  window.location = {
    hostname: 'localhost',
  };
  expect(isDev()).toBe(true);

  window.location = {
    hostname: 'jkusuma',
  };
  expect(isDev()).toBe(false);

  window.location = origWindowLocation;
});
