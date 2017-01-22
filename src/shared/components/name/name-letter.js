import React, {Component} from 'react';
import deepExtend from 'deep-extend';

import {ConfiguredRadium} from '../../helpers/styles';

class NameLetter extends Component {
  render() {
    const {
      props: {
        children,
        style,
        ...otherProps,
      },
    } = this;
    const styles = {
      nameLetter: deepExtend({
        display: 'inline-block',
        cursor: 'default'
      }, style)
    };
    return (
      <div style={styles.nameLetter} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default ConfiguredRadium(NameLetter);
