import reduceReducers from 'reduce-reducers';
import {handleAction} from 'redux-actions';

import {actionTypes} from '../constants/action';
import {getClickLetterAnimCount, setClickLetterAnimCount, clearClickLetterAnimCount} from '../helpers/local-storage';

const defaultState = {
  clickLetterAnimCount: getClickLetterAnimCount(),
};

export default reduceReducers(
  state => state || defaultState,
  handleAction(actionTypes.CLICK_LETTER_ANIM, {
    next(state) {
      const clickLetterAnimCount = state.clickLetterAnimCount + 1;
      setClickLetterAnimCount(clickLetterAnimCount);
      return {
        ...state,
        clickLetterAnimCount,
      };
    },
  }, defaultState),
  handleAction(actionTypes.CLICK_LETTER_ANIM_CLEAR, {
    next(state) {
      clearClickLetterAnimCount();
      return {
        ...state,
        clickLetterAnimCount: 0,
      };
    },
  }, defaultState)
);

// export default (state = defaultState, action) => {
//   let clickLetterAnimCount;
//   switch (action.type) {
//     case actionTypes.CLICK_LETTER_ANIM:
//       clickLetterAnimCount = state.clickLetterAnimCount + 1;
//       setClickLetterAnimCount(clickLetterAnimCount);
//       return {
//         ...state,
//         clickLetterAnimCount,
//       };
//     case actionTypes.CLICK_LETTER_ANIM_CLEAR:
//       clearClickLetterAnimCount();
//       return {
//         ...state,
//         clickLetterAnimCount: 0,
//       };
//     default:
//       return state;
//   }
// };
