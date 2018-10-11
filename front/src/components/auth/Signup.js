// auth/Signup.js
import React, { Component } from 'react';
import AuthService from './AuthService'

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', email: '', role: "buyer"};
    this.service = new AuthService();
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;
    const role = this.state.role;

    this.service.signup(username, password, email, role)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
            email: "",
            role: "buyer"
        });
        this.props.getUser(response.user)
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      

  render() {
    return(
      <div>
        <h3>¡Bienvenido! Crea tu cuenta aquí:</h3>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Username:</label>
            <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          
          <fieldset>
            <label>Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Email:</label>
            <input type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
          <label>¿Eres comprador o vendedor?</label>
          <select name="role" value={this.state.role} onChange={e => this.handleChange(e)}>
            <option value="buyer">Comprador</option>
            <option value="seller">Vendedor</option>
          </select>
        </fieldset>

          
          <input type="submit" value="Sign up" />
        </form>

      </div>
    )
  }
}

export default Signup;