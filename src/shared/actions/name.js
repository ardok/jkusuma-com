import {actionTypes} from '../constants/action';

export function clickAnimLetter() {
  return {
    type: actionTypes.CLICK_LETTER_ANIM,
  };
}

export function clearClickLetterAnimCount() {
  return {
    type: actionTypes.CLICK_LETTER_ANIM_CLEAR,
  };
}
