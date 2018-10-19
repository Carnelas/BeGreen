import React, { Component } from 'react';
import AuthService from './AuthService';
import {Redirect} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          redirect: true,
          error: false
        });

        this.props.getUser(response)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    if(this.state.redirect) return <Redirect to='/'/>
    return (
      <div className="login">
        <h3>¡Hola! Bienvenido de nuevo</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div className="column is-6 is-offset-3">
            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <input className="input" type="text" placeholder="nombre" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
              </div>
            </div>
            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <input className="input" type="password" placeholder="contraseña" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
              </div>
            </div>
          </div>
          <input type="submit" value="Login" className="button is-rounded is-focused is-hovered is-light" />
        </form>
      </div>
    )
  }
}

export default Login;