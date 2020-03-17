import React from 'react'

class Pet extends React.Component {
  displayGender = () => {
    if (this.props.pet.gender === 'male') {
      return '♂'
    } else {
      return '♀'
    }
  }

  displayButton = () => {
    if (this.props.pet.isAdopted === false) {
      return <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
    } else {
      return <button className="ui disabled button">Already adopted</button>
    }
  }

  handleClick = () => {
    // event.preventDefault()
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.displayGender()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}lb</p>
          </div>
        </div>
        <div className="extra content">
          {/* <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button> */}
          {this.displayButton()}
        </div>
      </div>
    )
  }
}

export default Pet
