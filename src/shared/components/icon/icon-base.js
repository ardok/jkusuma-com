import React from 'react';
import PropTypes from 'prop-types';

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
  style: PropTypes.shape(),
  iconClassName: PropTypes.string,
  href: PropTypes.string,
  onLinkClick: PropTypes.func,
};

IconBase.defaultProps = {
  style: {},
  iconClassName: '',
  href: '',
  onLinkClick: noop,
};

export default configuredRadium(IconBase);
