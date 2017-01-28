import React, {Component} from 'react';
import ProgressBar from 'react-progressbar.js';

import IconLinkedIn from './icon-linked-in';
import IconGitHub from './icon-github';

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
      color: '#455a64',
      strokeWidth: 4,
      duration: PB_TIME,
    };

    const styles = {
      container: {
        position: 'absolute',
        left: 'calc(50% - 36.5px)',
        top: 'calc(50% - 132px)',
        zIndex: 1,
      },
      pbContainer: {
        position: 'absolute',
        zIndex: 1,
        borderRadius: '50%',
      },
      pbCircle: {
        width: '75px',
        height: '75px',
      },
      iconLinkedInContainer: {
        width: '75px',
        height: '75px',
      },
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
        <div style={styles.iconLinkedInContainer}>
          <IconLinkedIn style={styles.iconLinkedIn} />
          <IconGitHub style={styles.iconGitHub} />
        </div>
      </div>
    );
  }
}

export default configuredRadium(PBCircle);
