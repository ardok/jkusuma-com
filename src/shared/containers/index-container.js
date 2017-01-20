import React, {Component} from 'react';

const Name = (props) => {
  const {className = '', children} = props;
  return (
    <div className={`display--inline-block cursor--default ${className}`}>
      {children}
    </div>
  );
};

const NameShake = (props) => {
  const {children} = props;
  return (
    <Name className="name--shake">{children}</Name>
  );
};

class IndexContainer extends Component {
  render() {
    return (
      <div className="name__container">
        <div className="name__inner-container">
          <div className="name__first">
            <Name className="name--j">J</Name>
            <NameShake>A</NameShake>
            <NameShake>N</NameShake>
            <NameShake>U</NameShake>
            <NameShake>A</NameShake>
            <NameShake>R</NameShake>
            <Name className="name--y">Y</Name>
            <Name className="name--d">D</Name>
            <Name className="name--o">O</Name>
          </div>
          <div className="name__last">
            KUSUMA
          </div>
        </div>
      </div>
    );
  }
}

export default IndexContainer;
