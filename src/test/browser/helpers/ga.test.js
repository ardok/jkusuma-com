import sinon from 'sinon';
import gaHelper from '../../../shared/helpers/ga';

test('Helper ga: clickAnimLetterCount', () => {
  const sendSpy = sinon.spy(gaHelper, 'send');
  gaHelper.clickAnimLetterCount();
  expect(sendSpy.getCall(0).args[0]).toEqual({
    eventCategory: 'clickAnimLetterCount',
    eventAction: 'click',
  });
  sendSpy.restore();
});

test('Helper ga: clickAnimLetter', () => {
  const sendSpy = sinon.spy(gaHelper, 'send');
  gaHelper.clickAnimLetter();
  expect(sendSpy.getCall(0).args[0]).toEqual({
    eventCategory: 'clickAnimLetter',
    eventAction: 'click',
  });
  sendSpy.restore();
});

test('Helper ga: clickLinkedIn', () => {
  const sendSpy = sinon.spy(gaHelper, 'send');
  gaHelper.clickLinkedIn();
  expect(sendSpy.getCall(0).args[0]).toEqual({
    eventCategory: 'clickLinkedIn',
    eventAction: 'click',
  });
  sendSpy.restore();
});

test('Helper ga: clickGitHub', () => {
  const sendSpy = sinon.spy(gaHelper, 'send');
  gaHelper.clickGitHub();
  expect(sendSpy.getCall(0).args[0]).toEqual({
    eventCategory: 'clickGitHub',
    eventAction: 'click',
  });
  sendSpy.restore();
});
