import window from 'global/window';

const KEY_PREFIX = 'jkusuma-com';
export const lsKeys = {
  CLICK_LETTER_ANIM_COUNT: `${KEY_PREFIX}/clickLetterAnimCount`,
};

function get(key, defaultValue = null) {
  if (!window.localStorage) {
    return defaultValue;
  }
  let value = null;
  try {
    value = JSON.parse(window.localStorage.getItem(key));
  } catch (e) {
    // do nothing
  }
  return value || defaultValue;
}

function set(key, value) {
  if (!window.localStorage) {
    return;
  }
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
}

function remove(key) {
  if (!window.localStorage) {
    return;
  }
  window.localStorage.removeItem(key);
}

export function getClickLetterAnimCount() {
  return get(lsKeys.CLICK_LETTER_ANIM_COUNT, 0);
}

export function setClickLetterAnimCount(newValue) {
  return set(lsKeys.CLICK_LETTER_ANIM_COUNT, newValue);
}

export function clearClickLetterAnimCount() {
  return remove(lsKeys.CLICK_LETTER_ANIM_COUNT);
}

export function clearLocalStorage() {
  if (window.localStorage) {
    window.localStorage.clear();
  }
}
