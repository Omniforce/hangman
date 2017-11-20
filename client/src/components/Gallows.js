import React from 'react';

class Gallows extends React.Component {
  render() {
    const bodyParts = ['head', 'torso', 'leftArm', 'leftHand', 'rightArm', 'rightHand', 'leftLeg', 'leftFoot', 'rightLeg', 'rightFoot'];
    const partsToRender = [...Array(this.props.errorCount)].map((_, i) => {
      return <div key={i} className={bodyParts[i]}></div>
    });

    return (
      <div className="gallows">
        <div className="gallowsArm"></div>
        <div className="gallowsPole"></div>
        {partsToRender}
      </div>
    )
  }
}

export default Gallows;
