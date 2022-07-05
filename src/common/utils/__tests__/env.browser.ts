import { isDev } from '../env';

test('Helper browser: isDev', () => {
  const origWindowLocation = window.location;
  // @ts-ignore
  delete window.location;

  // @ts-ignore
  window.location = {
    hostname: 'localhost',
  };
  expect(isDev()).toBe(true);

  // @ts-ignore
  window.location = {
    hostname: 'jkusuma',
  };
  expect(isDev()).toBe(false);

  window.location = origWindowLocation;
});
