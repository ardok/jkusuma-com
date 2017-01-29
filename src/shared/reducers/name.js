import {actionTypes} from '../constants/action';
import {getClickLetterAnimCount, setClickLetterAnimCount, clearClickLetterAnimCount} from '../helpers/local-storage';

const defaultState = {
  clickLetterAnimCount: getClickLetterAnimCount(),
};

export default (state = defaultState, action) => {
  let clickLetterAnimCount;
  switch (action.type) {
    case actionTypes.CLICK_LETTER_ANIM:
      clickLetterAnimCount = state.clickLetterAnimCount + 1;
      setClickLetterAnimCount(clickLetterAnimCount);
      return {
        ...state,
        clickLetterAnimCount,
      };
    case actionTypes.CLICK_LETTER_ANIM_CLEAR:
      clearClickLetterAnimCount();
      return {
        ...state,
        clickLetterAnimCount: 0,
      };
    default:
      return state;
  }
};
