import browserHelper from '../../../utils/browser';

test('Helper: isDev', () => {
  expect(browserHelper.isDev()).toBe(false);
});
