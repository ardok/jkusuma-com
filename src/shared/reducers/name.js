import {actionTypes} from '../constants/action';

const defaultState = {
  clickLetterAnimCount: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CLICK_LETTER_ANIM:
      return {
        ...state,
        clickLetterAnimCount: state.clickLetterAnimCount + 1,
      };
    default:
      return state;
  }
};
