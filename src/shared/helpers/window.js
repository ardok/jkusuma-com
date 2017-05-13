import dotty from 'dotty';
import window from 'global/window';

export default {
  getHostname() {
    return dotty.get(window, 'location.hostname');
  },
};
