import React, {Component} from 'react';
import {StyleRoot} from 'radium';

class AppContainer extends Component {
  render() {
    return (
      <StyleRoot>
        <div>
          {this.props.children}
        </div>
      </StyleRoot>
    );
  }
}

export default AppContainer;
