import sinon from 'sinon';
import browserHelper from '../../../utils/browser';
import windowHelper from '../../../utils/window';

test('Helper browser: isDev', () => {
  expect(browserHelper.isDev()).toBe(true);

  let stubbed = sinon.stub(windowHelper, 'getHostname').callsFake(() => 'jkusuma');
  expect(browserHelper.isDev()).toBe(false);
  stubbed.restore();

  stubbed = sinon.stub(windowHelper, 'getHostname').callsFake(() => 'localhost');
  expect(browserHelper.isDev()).toBe(true);
  stubbed.restore();
});
