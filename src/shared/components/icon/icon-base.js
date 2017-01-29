import React, {PropTypes} from 'react';

import {configuredRadium} from '../../helpers/styles';

function noop() {}

const IconBase = (props) => {
  const {style, href, iconClassName, onLinkClick = noop} = props;
  return (
    <div style={style}>
      <a href={href} onClick={onLinkClick}>
        <i className={`transition ${iconClassName}`} />
      </a>
    </div>
  );
};

IconBase.propTypes = {
  style: PropTypes.object,
  iconClassName: PropTypes.string,
  href: PropTypes.string,
  onLinkClick: PropTypes.func,
};

export default configuredRadium(IconBase);
