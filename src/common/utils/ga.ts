import { isDev } from './env';

class GA {
  constructor() {}

  send(eventData: {
    eventCategory: string;
    eventAction: 'click';
    eventCallback?: () => void;
  }) {
    if (!window.gtag || isDev()) {
      return;
    }
    const { eventAction, ...rest } = eventData;
    window.gtag('event', eventAction, {
      ...rest,
    });
  }

  clickAnimLetterCount() {
    // Clicking the count text on top right
    this.send({
      eventCategory: 'clickAnimLetterCount',
      eventAction: 'click',
    });
  }

  clickAnimLetter() {
    // Clicking the name letters in the middle of the page
    this.send({
      eventCategory: 'clickAnimLetter',
      eventAction: 'click',
    });
  }

  clickLinkedIn() {
    this.send({
      eventCategory: 'clickLinkedIn',
      eventAction: 'click',
    });
  }

  clickGitHub() {
    this.send({
      eventCategory: 'clickGitHub',
      eventAction: 'click',
    });
  }
}

const GAClass = new GA();

export { GAClass };
