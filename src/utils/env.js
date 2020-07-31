// @flow
import window from 'global/window';

export function isDev() {
  return window?.location?.hostname === 'localhost';
}
