import React, {PropTypes} from 'react';

import {configuredRadium} from '../../helpers/styles';

const IconGitHub = (props) => (
  <div>
    <a href="https://github.com/ardok/jkusuma-com">
      <i className="transition icon--github ion-social-github" style={props.style} />
    </a>
  </div>
);

IconGitHub.propTypes = {
  style: PropTypes.object,
};

export default configuredRadium(IconGitHub);
