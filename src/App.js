import React, { Component } from 'react';
import CityForm from './components/CityForm/CityForm';
import HikePage from './components/HikePage/HikePage';
import IndividualHike from './components/IndividualHike/IndividualHike';
import './App.css';
import { getLatLng } from './services/geolocation';
import { Route, Switch } from 'react-router-dom';
import { findTrails } from './services/findtrails';

class App extends Component {

  state = {
    city: '',
    lat: null,
    lng: null,
    trails: []
  }

  updateCity = async e => {
    const data = await getLatLng(this.state.city);
    const trails = await findTrails(data.coord.lat, data.coord.lon);
    this.setState({lat: data.coord.lat, lng: data.coord.lon, trails: trails.trails });
  };

  handleEnterCity = e => {
    e.preventDefault();
    this.setState({ city: e.target.value })
  }
  
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <div className="App">
            <div className="App-header">
              <div className="App-header-layer">
                <h3>Take a Hike</h3>
              </div>
            </div>
            <CityForm city={this.state.city} updateCity={this.updateCity} handleEnterCity={this.handleEnterCity} />
          </div>
        </Route>
        <Route exact path="/hikes">
          <div>
            <HikePage trails={this.state.trails}/>
          </div>
        </Route>
        <Route exact path="/hikes/:id" render={(props) => <IndividualHike {...props} trails={this.state.trails} />} />
      </Switch>
    );
  }
}

export default App;
