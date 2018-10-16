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
              <img src="http://www.cocoua.es/iamgenes/es.AppTardStudios.crazy_homer.png" width="112" height="28" alt="logo"></img>
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
                <Link to='/SaleItems'>Productos a la venta</Link>
              </a>

              <a className="navbar-item">
              <Link to='/ShowUsers'>Usuarios a la venta</Link>
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
              <img src="http://www.cocoua.es/iamgenes/es.AppTardStudios.crazy_homer.png" width="112" height="28" alt="logo"></img>
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

/* 
<div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item" href="../">
                    <img src="http://www.cocoua.es/iamgenes/es.AppTardStudios.crazy_homer.png" alt="Logo" width="112" height="28"/>
                  </a>
                  <span className="navbar-burger burger" data-target="navbarMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div id="navbarMenu" className="navbar-menu">
                  <div className="navbar-end">
                    <span className="navbar-item">
                      <a className="button is-white is-outlined" href="#">
                        <span className="icon">
                          <i className="fa fa-home"/>
                        </span>
                        <Link to='/'>Home</Link>
                      </a>
                    </span>
                    <span className="navbar-item">
                      <a className="button is-white is-outlined" href="#">
                        <span className="icon">
                          <i className="fa fa-superpowers"></i>
                        </span>
                        <span>Examples</span>
                      </a>
                    </span>
                    <span className="navbar-item">
                      <a className="button is-white is-outlined" href="#">
                        <span className="icon">
                          <i className="fa fa-book"></i>
                        </span>
                        <span>Documentation</span>
                      </a>
                    </span>
                    <span className="navbar-item">
                      <a className="button is-white is-outlined" href="https://github.com/dansup/bulma-templates/blob/master/templates/landing.html">
                        <span className="icon">
                          <i className="fa fa-github"></i>
                        </span>
                        <span>View Source</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div> */