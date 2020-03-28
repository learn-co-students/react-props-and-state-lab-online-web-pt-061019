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

  onChangeType = (e) => {
    // console.log(e.target.value)
    let pet = e.target.value // Can I refactor this?
    this.setState({
      filters: {
        ...this.state.filters,
        type: pet
      }
    })
    // console.log(this.state.filters.type)
  }

  onFindPetsClick = () => {
    let URL = '/api/pets'

    if (this.state.filters.type != "all") {
      URL =  `/api/pets?type=${this.state.filters.type}`
      console.log(URL)
    }

    fetch(URL)
    .then(response => response.json())
    .then(pets => this.setState({
      pets: pets
    }))
  }

  onAdoptPet = (id) => {
    // Map over the existing pets
    // If one is found where the ID matches (from the adopt button) change isAdopted status to true
    // Otherwise, return all pets with no changes
    // Then, update the state of all pets
    const pets = this.state.pets.map(p => {
      return p.id === id ? {...p, isAdopted: true} : p
    });
    this.setState({
      pets: pets
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// onChange={event => onChange(event)}  // But does this work?
// onChange={this.onChange} // This works?

export default App
