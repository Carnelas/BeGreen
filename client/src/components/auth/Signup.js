import React, { Component } from 'react';
import AuthService from './AuthService'
import {Redirect} from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', phone: '', role: "buyer" };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const phone = this.state.phone;
    const role = this.state.role;

    this.service.signup(username, password, phone, role)
      .then(response => {
        this.setState({
          username: "",
          password: "",
          phone: "",
          role: "buyer",
          redirect: true
        });
        this.props.getUser(response.user)
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    if(this.state.redirect) return <Redirect to='/'/>
    return (
      <div className="signup column is-6 is-offset-3">
        <h3>¡Bienvenido! Crea tu cuenta aquí:</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div className="column is-6 is-offset-3">
            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                  <input className="input" type="text" placeholder="Nombre" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
              </div>
            </div>
            <div className="field is-grouped is-grouped-centered">
              <div className="control"> 
                  <input className="input" type="password" placeholder="Contraseña" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
              </div>
            </div>
            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                  <input className="input" type="text" placeholder="Teléfono" name="phone" value={this.state.phone} onChange={e => this.handleChange(e)} />
              </div>
            </div>
          </div>
          <div className="field is-grouped is-grouped-centered">
            <div className="control">
                <label>¿Eres comprador o vendedor? </label>
                <select name="role" className="select is-rounded" value={this.state.role} onChange={e => this.handleChange(e)}>
                  <option value="buyer">Comprador</option>
                  <option value="seller">Vendedor</option>
                </select>
            </div>
          </div>
          <input type="submit" value="Sign up" className="button is-rounded is-focused is-hovered is-light" />
        </form>
      </div>
    )
  }
}

export default Signup;



{/*  */ }