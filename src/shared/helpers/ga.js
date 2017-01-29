import window from 'global/window';

import {isDev} from './browser';

function gaSend(eventData = {}) {
  if (!window.ga || isDev()) {
    return;
  }
  window.ga('send', {
    hitType: 'event',
    ...eventData,
  });
}

export function gaClickAnimLetterCount() {
  gaSend({
    eventCategory: 'clickAnimLetterCount',
    eventAction: 'click',
  });
}

export function gaClickAnimLetter() {
  gaSend({
    eventCategory: 'clickAnimLetter',
    eventAction: 'click',
  });
}

export function gaClickLinkedIn() {
  gaSend({
    eventCategory: 'clickLinkedIn',
    eventAction: 'click',
  });
}

export function gaClickGitHub() {
  gaSend({
    eventCategory: 'clickGitHub',
    eventAction: 'click',
  });
}
