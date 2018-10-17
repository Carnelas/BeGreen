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
              <a className="navbar-item" href="#">
                <img src="/images/logo-begreen.png" height="250" alt="logo"></img>
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-start">
                <Link to='/' className="navbar-item">Home-r</Link>
                <Link to='/Seller' className="navbar-item">Perfil vendedor</Link>
                <Link to='/ShowUsers' className="navbar-item">Usuarios a la venta</Link>
                <Link to='/ShowRest' className="navbar-item">Indice rests</Link>
                <Link to='/Signuprest' className="navbar-item">Registra rests</Link>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <button className="button is-rounded is-hovered is-inverted" onClick={this.handleLogout}>Logout</button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )
    } else {
      return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <img src="/images/logo-begreen.png" height="250" alt="logo"></img>
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start ">
              <Link to='/' className="navbar-item">Home</Link >
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  Registrate o haz login
                </a>
                <div className="navbar-item navbar-dropdown is-hoverable">
                  <Link to='/Signup' className="navbar-item">Registrate</Link>
                  <Link to='/Login' className="navbar-item">Entra en tu sesión</Link>
                  <a className="navbar-item">
                    Contacto
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
