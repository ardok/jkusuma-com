// @flow
import window from 'global/window';

class LocalStorage {
  localStorage: any;

  constructor(props: { store?: any } = {}) {
    this.localStorage = props.store || window.localStorage;
  }

  get(key, defaultValue) {
    if (!this.localStorage) {
      return defaultValue;
    }
    let value = null;
    try {
      value = JSON.parse(this.localStorage.getItem(key));
    } catch (e) {
      // do nothing
    }
    return value || defaultValue;
  }

  set(key, value) {
    if (!this.localStorage) {
      return;
    }
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    this.localStorage.setItem(key, value);
  }

  remove(key) {
    if (!this.localStorage) {
      return;
    }
    this.localStorage.removeItem(key);
  }

  clear() {
    if (this.localStorage) {
      this.localStorage.clear();
    }
  }
}

const KEY_PREFIX = 'jkusuma-com';
export const lsKeys = {
  CLICK_LETTER_ANIM_COUNT: `${KEY_PREFIX}/clickLetterAnimCount`,
};

const kLocalStorage = new LocalStorage();

export function getClickLetterAnimCount(): number {
  return kLocalStorage.get(lsKeys.CLICK_LETTER_ANIM_COUNT, 0);
}

export function setClickLetterAnimCount(newValue: number) {
  return kLocalStorage.set(lsKeys.CLICK_LETTER_ANIM_COUNT, newValue);
}

export function clearClickLetterAnimCount() {
  return kLocalStorage.remove(lsKeys.CLICK_LETTER_ANIM_COUNT);
}
