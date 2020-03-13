import React from "react";

class Pet extends React.Component {
  // petGender = props => {
  //   return props.pet.gender === "male" ? "♂" : "♀";
  // };

  // isAdopted = props => {
  //   if (props.pet.isAdopted) {
  //     return <button className="ui disabled button">Already adopted</button>;
  //   } else {
  //     return (
  //       <button
  //         className="ui primary button"
  //         onClick={() => this.props.onAdoptPet(this.props.pet.id)}
  //       >
  //         Adopt pet
  //       </button>
  //     );
  //   }
  // };

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {/* {this.petGender(this.props)} */}

            {/* Using ternary */}
            {this.props.pet.gender === "male" ? "♂" : "♀"}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {/* Using callback, if and else statement */}
          {/* {this.isAdopted(this.props)} */}

          {/* USING TERNARY OPERATOR */}
          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              className="ui primary button"
              onClick={() => this.props.onAdoptPet(this.props.pet.id)}
            >
              Adopt pet
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Pet;
