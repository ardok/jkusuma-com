import window from 'global/window';

import browserHelper from './browser';

export default {
  send(eventData = {}) {
    if (!window.ga || browserHelper.isDev()) {
      return;
    }
    window.ga('send', {
      hitType: 'event',
      ...eventData,
    });
  },

  clickAnimLetterCount() {
    this.send({
      eventCategory: 'clickAnimLetterCount',
      eventAction: 'click',
    });
  },

  clickAnimLetter() {
    this.send({
      eventCategory: 'clickAnimLetter',
      eventAction: 'click',
    });
  },

  clickLinkedIn() {
    this.send({
      eventCategory: 'clickLinkedIn',
      eventAction: 'click',
    });
  },

  clickGitHub() {
    this.send({
      eventCategory: 'clickGitHub',
      eventAction: 'click',
    });
  },
};