import React, {Component, PropTypes} from 'react';
import deepExtend from 'deep-extend';

import {configuredRadium} from '../../helpers/styles';
import {gaClickAnimLetter} from '../../helpers/ga';

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
        ...otherProps,
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
          gaClickAnimLetter();
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
  children: PropTypes.any,
  style: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string,
  noAnimation: PropTypes.bool,
};

NameLetter.defaultProps = {
  noAnimation: false,
};

export default configuredRadium(NameLetter);
