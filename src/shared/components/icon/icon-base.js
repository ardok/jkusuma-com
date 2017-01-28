import React, {PropTypes} from 'react';

import {configuredRadium} from '../../helpers/styles';

const IconBase = (props) => (
  <div style={props.style}>
    <a href={props.href}>
      <i className={`transition ${props.iconClassName}`} />
    </a>
  </div>
);

IconBase.propTypes = {
  style: PropTypes.object,
  iconClassName: PropTypes.string,
  href: PropTypes.string,
};

export default configuredRadium(IconBase);
