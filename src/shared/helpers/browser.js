import window from 'global/window';
export function isDev(location = window.location) {
  if (!location) {
    return true;
  }
  return location.hostname === 'localhost';
}
