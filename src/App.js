import React, { Component } from 'react';
import CityForm from './components/CityForm/CityForm';
import './App.css';

class App extends Component {

  state = {
    city: ''
  }

  updateCity = e => {
    e.preventDefault();
    this.setState(state => ({ city: this.state.city })); // later, I think what I want this function to do is really to update the COORDINATES based on the city that's entered
  }

  handleEnterCity = e => {
    e.preventDefault();
    this.setState({ city: e.target.value })
  }
  
  render() {
    return (
      <div className="App">
        <CityForm city={this.state.city} updateCity={this.updateCity} handleEnterCity={this.handleEnterCity} />
      </div>
    );
  }
}

export default App;
