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
    let pet = e.target.value // Can I refactor this?
    this.setState({
      filters: {
        ...this.state.filters,
        type: pet
      }
    })
  }

  onFindPetsClick = (e) => {
    let URL = '/api/pets'

    if (this.state.filters.type != "all") {
      URL =  `/api/pets?type=${this.state.filters.type}`
      // URL += this.state.filters.type
      console.log(URL)
    }

    fetch(URL)
    .then(response => response.json())
    .then(pets => this.setState({
      pets: pets
    }))
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
              <PetBrowser />
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
