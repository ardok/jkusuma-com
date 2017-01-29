import React, {Component} from 'react';
import ProgressBar from 'react-progressbar.js';

import IconBase from './icon-base';

import {configuredRadium} from '../../helpers/styles';

const ProgressBarCircle = ProgressBar.Circle;
const PB_TIME = 1450;

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

    const options = {
      // color: '#455a64',
      color: '#000',
      strokeWidth: 4,
      duration: PB_TIME,
    };

    const pbCircleStyle = {
      width: '100px',
      height: '100px',
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
    };

    const iconLinkedInProps = {
      href: 'https://www.linkedin.com/in/januardokusuma/',
      iconClassName: 'icon--linkedin ion-social-linkedin',
      style: styles.iconLinkedIn,
    };

    const iconGitHubProps = {
      href: 'https://github.com/ardok/jkusuma-com',
      iconClassName: 'icon--github ion-social-github',
      style: styles.iconGitHub,
    };

    return (
      <div style={styles.container}>
        <div className={`pb__container ${pbClassName}`} style={styles.pbContainer}>
          <ProgressBarCircle
            progress={1}
            options={options}
            initialAnimate
            containerStyle={styles.pbCircle}
          />
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
