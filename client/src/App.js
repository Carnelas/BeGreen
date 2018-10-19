import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import Home from './components/contents/Home';
import AddItems from './components/contents/Items/AddItems';
import SaleItems from './components/contents/Items/SaleItems';
import Footer from './components/footer/Footer'
import ShowUsers from './components/contents/ShowUsers';
import ShowRest from './components/contents/Restaurants/ShowRestaurants';
import SignupRest from './components/contents/Restaurants/SignupRest';
import ShowSellerItems from './components/contents/Items/showSellerItems';
import ShowRestaurants from './components/contents/Restaurants/ShowRestaurants';
import ShowRestaurantsId from './components/contents/Restaurants/ShowRestaurantsId';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  logout = () => {
    this.service.logout()
      .then(() => {
        this.setState({ loggedInUser: null });
      })
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          })
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }

  render() {
    this.fetchUser()

    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
          </header>
          <div>
            <Route exact path='/' render={() =>
              <Home />} />
            <Route exact path='/addobjets' render={() =>
              <AddItems />} />
            <Route exact path='/items' render={() =>
              <SaleItems userInSession={this.state.loggedInUser} />} />
            <Route exact path='/sellers' render={() =>
              <ShowUsers userInSession={this.state.loggedInUser} />} />
            <Route path='/profile/:id' render={({ match, location, history }) =>
              <ShowSellerItems params={match.params} userInSession={this.state.loggedInUser} />} />
            <Route exact path='/restsignup' render={() =>
              <SignupRest userInSession={this.state.loggedInUser} />} />
            <Route exact path='/restaurants' render={() =>
              <ShowRestaurants userInSession={this.state.loggedInUser} />} />
            <Route path='/restaurants/:id' render={({ match, location, history }) =>
              <ShowRestaurantsId params={match.params} userInSession={this.state.loggedInUser} />
            } />
            <Footer/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            <Switch>
              <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser} />} />
              <Route exact path='/login' render={() => <Login getUser={this.getTheUser} />} />
            </Switch>
            </header>
            <Route exact path='/' render={() =>
                <Home />} />
        </div>

      );
    }
  }
}

export default App;