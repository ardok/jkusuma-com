import window from 'global/window';
export function isDev() {
  if (!window.location) {
    return true;
  }
  return window.location.hostname === 'localhost';
}
