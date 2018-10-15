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
        <nav className="nav-style">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Signup'>Signup</Link></li>
          <li><Link to='/Login'>Login</Link></li>
          <li><Link to='/Seller'>Perfil personal del vendedor</Link></li>
          <li><Link to='/Profile'>Perfil de ventas del vendedor</Link></li>
          <li><button onClick={this.handleLogout}>Logout</button></li>
        </ul>

        <h2>Welcome, {this.state.loggedInUser.username}</h2>
      </nav>
      )
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/login'>Login</Link></li>
            </ul>
          </nav>
        </div>
      )
    }
  }
}

export default Navbar;
