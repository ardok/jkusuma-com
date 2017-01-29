import {clickAnimLetter} from '../../../shared/actions/name';
import {actionTypes} from '../../../shared/constants/action';

test('Action__name', () => {
  it('create correct clickAnimLetter action', () => {
    const expectedAction = {
      type: actionTypes.CLICK_LETTER_ANIM,
    };
    expect(clickAnimLetter()).toEqual(expectedAction);
  });
});
