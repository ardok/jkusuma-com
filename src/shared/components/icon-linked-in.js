import React, {Component} from 'react';

import {ConfiguredRadium} from '../helpers/styles';

const IconLinkedIn = (props) => {
  return (
    <div>
      <a href="https://www.linkedin.com/in/januardokusuma/">
        <i className="transition icon--linked-in ion-social-linkedin-outline" style={props.style} />
      </a>
    </div>
  );
};

export default ConfiguredRadium(IconLinkedIn);
