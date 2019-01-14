import React, {Component} from 'react';

import IconBase from './icon-base';

import {configuredRadium} from '../../helpers/styles';
import gaHelper from '../../helpers/ga';

const PB_TIME = 1450;

const pbCircleStyle = {
  width: '100px',
  height: '100px',
};

const styleSquareCommon = {
  backgroundColor: '#000',
  position: 'absolute',
};

const stylesSquareAnimationCommon = {
  animationDuration: `${PB_TIME}ms`,
  animationFillMode: 'forwards',
  animationTimingFunction: 'ease-in',
};

const styles = {
  container: {
    position: 'absolute',
    left: 'calc(50% - 50px)',
    top: 'calc(50% - 160px)',
    zIndex: 1,
  },
  pbContainer: {
    position: 'absolute',
    zIndex: 1,
    borderRadius: '50%',
  },
  pbCircle: pbCircleStyle,
  iconsContainer: pbCircleStyle,
  iconLinkedIn: {
    position: 'absolute',
    left: 'calc(50% - 13px)',
    top: 0,
    fontSize: '36px',
  },
  iconGitHub: {
    position: 'absolute',
    left: 'calc(50% - 15px)',
    top: '45%',
    fontSize: '36px',
  },

  squareCutContainer: {
    width: '100px',
    height: '100px',
    top: '-9px',
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: '#fafafa',
    zIndex: 1,
  },
  squareCutTop: {
    height: '2px',
    top: 0,
    ...styleSquareCommon,
    animationName: 'squareCutHorizontal',
    ...stylesSquareAnimationCommon,
  },
  squareCutRight: {
    width: '2px',
    right: 0,
    top: 0,
    ...styleSquareCommon,
    animationName: 'squareCutVertical',
    ...stylesSquareAnimationCommon,
  },
  squareCutBottom: {
    height: '2px',
    width: '100%',
    bottom: 0,
    animationName: 'squareCutBottom',
    ...styleSquareCommon,
    ...stylesSquareAnimationCommon,
  },
  squareCutLeft: {
    width: '2px',
    height: '100%',
    left: 0,
    animationName: 'squareCutLeft',
    ...styleSquareCommon,
    ...stylesSquareAnimationCommon,
  },
};

class PBCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pbClassName: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        pbClassName: 'pb--anim-fall',
      });
    }, PB_TIME);
  }

  render() {
    const {
      state: {
        pbClassName,
      },
    } = this;

    const iconLinkedInProps = {
      href: 'https://www.linkedin.com/in/ardokusuma/',
      iconClassName: 'icon--linkedin ion-social-linkedin',
      style: styles.iconLinkedIn,
      onLinkClick: gaHelper.clickLinkedIn,
    };

    const iconGitHubProps = {
      href: 'https://github.com/ardok/jkusuma-com',
      iconClassName: 'icon--github ion-social-github',
      style: styles.iconGitHub,
      onLinkClick: gaHelper.clickGitHub,
    };

    return (
      <div style={styles.container}>
        <div className={pbClassName} style={styles.squareCutContainer}>
          <div style={styles.squareCutTop} />
          <div style={styles.squareCutRight} />
          <div style={styles.squareCutBottom} />
          <div style={styles.squareCutLeft} />
        </div>
        <div style={styles.iconsContainer}>
          <IconBase {...iconLinkedInProps} />
          <IconBase {...iconGitHubProps} />
        </div>
      </div>
    );
  }
}

export default configuredRadium(PBCircle);
