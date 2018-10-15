// navbar/Navbar.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
  }

  handleLogout = (e) => {
    this.props.logout()
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a class="navbar-item" href="#">
              <img src="https://www.punanaamio.fi/media/catalog/product/cache/5/thumbnail/56x/9df78eab33525d08d6e5fb8d27136e95/s/m/sm144-homer-simpson-julkkisnaamari.jpg" width="112" height="28"></img>
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                <Link to='/'>Home-r</Link>
              </a>

              <a className="navbar-item">
                <Link to='/Seller'>Perfil vendedor</Link>
              </a>

              <a className="navbar-item">
                <Link to='/Profile'>Productos a la venta</Link>
              </a>
            </div>
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-light">
                    <button onClick={this.handleLogout}>Logout</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div>
          <h2>Hola, {this.state.loggedInUser.username}</h2>
          </div>
        </div>
      )
    } else {
      return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a class="navbar-item" href="#">
              <img src="https://www.punanaamio.fi/media/catalog/product/cache/5/thumbnail/56x/9df78eab33525d08d6e5fb8d27136e95/s/m/sm144-homer-simpson-julkkisnaamari.jpg" width="112" height="28"></img>
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                <Link to='/'>Home-r</Link>
              </a>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  More
                </a>
                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    <Link to='/Signup'>Signup</Link>
                  </a>
                  <a class="navbar-item">
                    <Link to='/Login'>Login</Link>
                  </a>
                  <a class="navbar-item">
                    Contact
          </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

      )
    }
  }
}

export default Navbar;
