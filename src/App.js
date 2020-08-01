import React, { Component } from 'react';
import CityForm from './components/CityForm/CityForm';
import HikePage from './components/HikePage/HikePage';
import IndividualHike from './components/IndividualHike/IndividualHike';
import NavBar from './components/NavBar/NavBar';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage.jsx'
import userService from './services/userService';
import './App.css';
//import styles from './App.module.css';
import { getLatLng } from './services/geolocation';
import { Route, Switch } from 'react-router-dom';
import { findTrails } from './services/findtrails';

class App extends Component {

  state = {
    city: '',
    lat: null,
    lng: null,
    trails: [],
    user: userService.getUser()
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

  handleSignUpOrLogIn = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogOut = () => {
    userService.logout();
    this.setState({ user: null });
  };
  
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <div className="App">
            <div className="App-header">
              <div className="App-header-layer">
                <h3>Take a Hike</h3>
                <div className="App-authentication">
                  <NavBar 
                    user={this.state.user}
                    handleLogOut={this.handleLogOut}  
                  />
                </div>
              </div>
            </div>
            <CityForm city={this.state.city} updateCity={this.updateCity} handleEnterCity={this.handleEnterCity} />
          </div>
        </Route>
        <Route exact path='/signup' render={({ history }) => 
          <SignUpPage
            history={history}
            handleSignUpOrLogIn={this.handleSignUpOrLogIn}
          />
        } />
        <Route exact path='/login' render={({ history }) =>
          <LoginPage
            history={history}
            handleSignUpOrLogIn={this.handleSignUpOrLogIn}
          />
        } />
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
