import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: 'all',
      },
    };
  }

  handleOnChangeType = (e) => {
    this.setState({
      ...this.state,
      filters: {
        type: this.target.value,
      },
    });
  };

  handleOnFindPetsClick = () => {
    let baseUrl = '/api/pets';
    if (this.state.filters.type !== 'all') {
      baseUrl += `?type=${this.state.filters.type}`;
    }
    // AAQ mentioned: .concat

    fetch(baseUrl)
      .then((res) => res.json())
      .then((json) => this.setState({ pets: json }));
  };

  onAdoptPet = (petId) => {
    const pets = this.state.pets.map((pet) => {
      console.log(pet.id);
    });
  };

  render() {
    return (
      <div className='ui container'>
        <header>
          <h1 className='ui dividing header'>React Animal Shelter</h1>
        </header>
        <div className='ui container'>
          <div className='ui grid'>
            <div className='four wide column'>
              <Filters
                onChangeType={this.handleOnChangeType}
                onFindPetsClick={this.handleOnFindPetsClick}
              />
            </div>
            <div className='twelve wide column'>
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
