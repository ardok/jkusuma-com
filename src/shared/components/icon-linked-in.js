import React, {Component} from 'react';

import {ConfiguredRadium} from '../helpers/styles';

class IconLinkedIn extends Component {
  render() {
    const styles = {
      linkedIn: {
        position: 'absolute',
        left: 'calc(50% - 13px)',
        top: '20%',
        fontSize: '36px'
      }
    };
    return (
      <div>
        <a href="https://www.linkedin.com/in/januardokusuma/">
          <i className="transition icon--linked-in ion-social-linkedin-outline" style={styles.linkedIn} />
        </a>
      </div>
    );
  }
}

export default ConfiguredRadium(IconLinkedIn);
