import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const allPets = this.props.pets.map(pet => (<Pet key={pet.id} id={pet.id} pet={pet} name={pet.name} type={pet.type} age={pet.age} weight={pet.weight} gender={pet.gender} isAdopted={this.isAdopted} onAdoptPet={this.props.onAdoptPet}/>));

    return <div className="ui cards">{allPets}</div>
  }
}

export default PetBrowser
