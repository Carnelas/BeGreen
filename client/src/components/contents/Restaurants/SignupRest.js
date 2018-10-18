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
            <div className="signup">
                <h3>Introduce los datos de tu restaurante aquí:</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="column is-6 is-offset-3">
                        <div className="field is-grouped is-grouped-centered">
                            <div className="control">
                                <fieldset>
                                    <input type="text" placeholder="Nombre de tu restaurante" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
                                </fieldset>
                            </div>
                        </div>
                        <div className="field is-grouped is-grouped-centered">
                            <div className="control">
                                <fieldset>
                                    <input type="number" placeholder="Teléfono" name="phone" value={this.state.phone} onChange={e => this.handleChange(e)} />
                                </fieldset>
                            </div>
                        </div>

                        <div className="field is-grouped is-grouped-centered">
                            <div className="control">
                                <fieldset>
                                    <input type="text" name="description" placeholder="Descripción" value={this.state.description} onChange={e => this.handleChange(e)} />
                                </fieldset>
                            </div>
                        </div>

                        <div className="field is-grouped is-grouped-centered">
                            <div className="control">
                                <fieldset>
                                    <input type="text" name="adress" placeholder="Dirección" value={this.state.adress} onChange={e => this.handleChange(e)} />
                                </fieldset>
                            </div>
                        </div>


                        <div className="field is-grouped is-grouped-centered">
                            <div className="control">
                                <fieldset>
                                    <input type="text" placeholder="Propietario" name="owner" value={this.state.owner} onChange={e => this.handleChange(e)} />
                                </fieldset>
                            </div>
                        </div>
                    </div>

                    <input type="submit" value="Sign up" className="button is-rounded is-focused is-hovered is-light" />
                </form>

            </div>
        )
    }
}

export default SignupRest;



{/*  */ }