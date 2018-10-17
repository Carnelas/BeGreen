// auth/Signup.js
import React, { Component } from 'react';
import AuthService from './AuthService'

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
          role: "buyer"
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
    return (
      <div>
        <h3>¡Bienvenido! Crea tu cuenta aquí:</h3>

        <form onSubmit={this.handleFormSubmit}>
          <div className="column is-6 is-offset-3">
            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <fieldset>
                  <label>Nombre de usuario:</label>
                  <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                </fieldset>
              </div>
            </div>
            <div className="field is-grouped is-grouped-centered"></div>
            <div className="control">
              <fieldset>
                <label>Contraseña:</label>
                <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
              </fieldset>
            </div>
          </div>
          <div className="field is-grouped is-grouped-centered">
            <div className="control">
              <fieldset>
                <label>Teléfono:</label>
                <input type="text" name="phone" value={this.state.phone} onChange={e => this.handleChange(e)} />
              </fieldset>
            </div>
          </div>
          <div className="field is-grouped is-grouped-centered">
            <div className="control">
              <fieldset>
                <label>¿Eres comprador o vendedor?</label>
                <select name="role" value={this.state.role} onChange={e => this.handleChange(e)}>
                  <option value="buyer">Comprador</option>
                  <option value="seller">Vendedor</option>
                </select>
              </fieldset>
            </div>
          </div>


          <input type="submit" value="Sign up" />
        </form>

      </div>
    )
  }
}

export default Signup;