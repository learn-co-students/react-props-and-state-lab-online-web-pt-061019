import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  generatePetCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return this.props.pets.map(pet => {
      return <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet}/>
    })
  }

  render() {
    return <div className="ui cards">
      {this.generatePetCards()}
    </div>
  }
}

export default PetBrowser
