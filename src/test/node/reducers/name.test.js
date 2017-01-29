import reducer from '../../../shared/reducers/name';
import {actionTypes} from '../../../shared/constants/action';

describe('Reducer: name', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      clickLetterAnimCount: 0,
    });
  });

  it(`should handle ${actionTypes.CLICK_LETTER_ANIM}`, () => {
    expect(
      reducer({
        clickLetterAnimCount: 0,
      }, {
        type: actionTypes.CLICK_LETTER_ANIM,
      })
    ).toEqual({
      clickLetterAnimCount: 1,
    });
  });
});
