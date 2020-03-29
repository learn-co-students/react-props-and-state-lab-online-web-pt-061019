import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleOnChangeType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  handleFindPets = () => {
    let baseURL = '/api/pets'
    if (this.state.filters.type !== 'all') {
      baseURL += `?type=${this.state.filters.type}`
    }
    fetch(baseURL)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        pets: json
      })
    })
  }

  handleAdoptPet = (id) => {
    let petsArrayCopy = [...this.state.pets]
    let selectedPet = petsArrayCopy.find(pet => pet.id === id)
    selectedPet.isAdopted = true
    this.setState({
      pets: petsArrayCopy
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType={this.handleOnChangeType}
                onFindPetsClick={this.handleFindPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
