import windowHelper from './window';

export default {
  isDev() {
    return windowHelper.getHostname() === 'localhost';
  },
};
