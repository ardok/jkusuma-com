import get from 'lodash.get';
import window from 'global/window';

export default {
  getHostname() {
    return get(window, 'location.hostname');
  },
};
