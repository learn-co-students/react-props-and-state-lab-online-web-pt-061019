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

  onChangeType = (event) => {
    let pet = event.target.value
    this.setState({
      filters: {
        ...this.state.filters,
        type: pet
      }
    })
  }

  onFindPets = () => {
    let baseURL = "/api/pets"
    if (this.state.filters.type !== "all") {
      baseURL = `${baseURL}?type=${this.state.filters.type}`
    }
    fetch(baseURL).then(res => res.json())
    .then(pets => {
      this.setState({
        pets: pets
      })
      // console.log(pets)
    })
  }

  onAdoptPet = (id) => {
    let newPetsArray = this.state.pets.map(element => {
      if (element.id === id) {
        element.isAdopted = true
        return element
      }
    })
    this.setState({
      pets: newPetsArray
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
