import React, {Component} from 'react';

import IconLinkedInWrapper from '../components/icon-linked-in-wrapper';
import NameMine from '../components/name-mine';

class IndexContainer extends Component {
  render() {
    return (
      <div>
        <IconLinkedInWrapper />
        <NameMine />
      </div>
    );
  }
}

export default IndexContainer;
