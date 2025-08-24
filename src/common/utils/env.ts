export function isDev() {
  return window?.location?.hostname === 'localhost';
}

export function isBrowser() {
  return typeof window !== 'undefined';
}

export function isNode() {
  return typeof window === 'undefined';
}
