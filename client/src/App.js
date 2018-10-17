import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import Contents from './components/contents/Contents';
import Seller from './components/contents/Seller';
import AddItems from './components/contents/AddItems';
import SaleItems from './components/contents/SaleItems';
import Footer from './components/footer/Footer';
import ShowUsers from './components/contents/ShowUsers';
import ShowRest from './components/contents/ShowRestaurants';
import SignupRest from './components/contents/SignupRest';
import ShowSellerItems from './components/contents/showSellerItems'

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
            {/* home */}
            <Route exact path='/' render={() =>
              <Contents></Contents>} />
            {/* Perfil personal de cada vendedor */}
            <Route exact path='/Seller' render={() =>
              <div><Seller userInSession={this.state.loggedInUser} />
                <AddItems /></div>} />
            {/* Perfil de ventas de cada vendedor */}
            <Route exact path='/SaleItems' render={() =>
              <div><SaleItems userInSession={this.state.loggedInUser} />
              </div>} />
            <Route exact path='/ShowUsers' render={() =>
              <div><ShowUsers userInSession={this.state.loggedInUser} />
              </div>} />
            <Route exact path='/SignupRest' render={() =>
              <div><SignupRest userInSession={this.state.loggedInUser} />
              </div>} />
            <Route exact path='/ShowRest' render={() =>
              <div><ShowRest userInSession={this.state.loggedInUser} />
              </div>} />
              <Route path='/profile/:id' render={( {match, location, history}) =>
              <div>
              <ShowSellerItems params={match.params} userInSession={this.state.loggedInUser} /></div>
              } />
            <Footer />
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
        </div>
      );
    }
  }
}

export default App;