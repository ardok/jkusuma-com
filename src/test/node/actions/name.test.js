import {clickAnimLetter, clearClickLetterAnimCount} from '../../../shared/actions/name';
import {actionTypes} from '../../../constants/action';

describe('Action: name', () => {
  it('create correct clickAnimLetter action', () => {
    expect(clickAnimLetter()).toEqual({
      type: actionTypes.CLICK_LETTER_ANIM,
    });
  });

  it('create correct clearClickLetterAnimCount action', () => {
    expect(clearClickLetterAnimCount()).toEqual({
      type: actionTypes.CLICK_LETTER_ANIM_CLEAR,
    });
  });
});
