import React, {PropTypes} from 'react';

import {configuredRadium} from '../../helpers/styles';

const IconLinkedIn = (props) => (
  <div>
    <a href="https://www.linkedin.com/in/januardokusuma/">
      <i className="transition icon--linked-in ion-social-linkedin-outline" style={props.style} />
    </a>
  </div>
);

IconLinkedIn.propTypes = {
  style: PropTypes.object,
};

export default configuredRadium(IconLinkedIn);
