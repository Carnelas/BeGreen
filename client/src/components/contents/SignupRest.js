import React, { Component } from 'react';
import Restaurant from './Restaurant'

class SignupRest extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', phone: '', description: '', adress: '', owner: '' };
        this.service = new Restaurant();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const phone = this.state.phone;
        const description = this.state.description;
        const adress = this.state.adress;
        const owner = this.state.owner;

        this.service.signupRest(name, phone, description, adress, owner)
            .then(response => {
                this.setState({
                    name: "",
                    phone: "",
                    description: "",
                    adress: "",
                    owner: ""
                });
                this.props.getRest(response.restaurant)
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
                <h3>¡Bienvenido! Publica tu restaurante aquí:</h3>

                <form onSubmit={this.handleFormSubmit}>
                    <fieldset>
                        <label>Nombre de tu restaurante:</label>
                        <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
                    </fieldset>

                    <fieldset>
                        <label>Teléfono:</label>
                        <input type="number" name="phone" value={this.state.phone} onChange={e => this.handleChange(e)} />
                    </fieldset>

                       <fieldset>
                        <label>Descripción:</label>
                        <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
                    </fieldset>

                    <fieldset>
                        <label>¿Cuál es tu dirección?</label>
                            <input type="text" name="adress" value={this.state.adress} onChange={e => this.handleChange(e)} />
                    </fieldset>

                    <fieldset>
                        <label>Nombre del propietario:</label>
                            <input type="text" name="owner" value={this.state.owner} onChange={e => this.handleChange(e)} />
                    </fieldset>


                    <input type="submit" value="Sign up" />
                </form>

            </div>
        )
    }
}

export default SignupRest;