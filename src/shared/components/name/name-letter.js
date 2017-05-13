import React, {Component} from 'react';
import PropTypes from 'prop-types';
import deepExtend from 'deep-extend';

import {configuredRadium} from '../../helpers/styles';
import gaHelper from '../../helpers/ga';

class NameLetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doneAnimating: false,
      divAnimClass: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({doneAnimating: true});
    }, 2000);
  }

  render() {
    const {
      props: {
        children,
        style,
        onClick,
        className,
        noAnimation,
        ...otherProps
      },
      state: {
        doneAnimating,
        divAnimClass,
      },
    } = this;
    const styles = {
      nameLetter: deepExtend({
        display: 'inline-block',
        cursor: 'default',
      }, style),
    };
    const divProps = {
      style: divAnimClass ? {
        display: 'inline-block',
        cursor: 'default',
      } : styles.nameLetter,
      ...otherProps,
      className: `name-letter__container ${className || ''} ${divAnimClass}`,
      onClick: (evt) => {
        if (!noAnimation && doneAnimating && !divAnimClass) {
          gaHelper.clickAnimLetter();
          this.setState({
            divAnimClass: 'pb--anim-fall',
          });
          if (typeof onClick === 'function') {
            onClick(evt);
          }
        }
      },
    };
    return (
      <div {...divProps}>
        {children}
      </div>
    );
  }
}

NameLetter.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape(),
  onClick: PropTypes.func,
  className: PropTypes.string,
  noAnimation: PropTypes.bool,
};

NameLetter.defaultProps = {
  noAnimation: false,
  children: null,
  style: {},
  onClick: () => {},
  className: '',
};

export default configuredRadium(NameLetter);
