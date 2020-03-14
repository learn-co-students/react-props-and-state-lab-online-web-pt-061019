import React from "react";

class Pet extends React.Component {
  render() {
    let disabledButton = (
      <button className="ui disabled button">Already adopted</button>
    );
    let adoptButton = <button className="ui primary button">Adopt pet</button>;
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.age} </p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? disabledButton : adoptButton}
        </div>
      </div>
    );
  }
}

export default Pet;
