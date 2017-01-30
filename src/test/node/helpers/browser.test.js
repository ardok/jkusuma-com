import browserHelper from '../../../shared/helpers/browser';

test('Helper: isDev', () => {
  expect(browserHelper.isDev()).toBe(false);
});
