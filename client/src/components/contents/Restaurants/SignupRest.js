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
            <div className="signuprest column is-6 is-offset-3">
                <h3>Introduce los datos de tu restaurante aquí:</h3>
                <form onSubmit={this.handleFormSubmit}>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="white label">Registro</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control is-expanded has-icons-left">
                                    <input className="input" type="text" placeholder="Nombre de tu restaurante" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user" />
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control is-expanded has-icons-left has-icons-right">
                                    <input className="input" type="text" placeholder="Propietario" name="owner" value={this.state.owner} onChange={e => this.handleChange(e)} />                                            <span className="icon is-small is-left">
                                        <i className="fas fa-envelope" />
                                    </span>
                                    <span className="icon is-small is-right">
                                        <i className="fas fa-check" />
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label"></div>
                        <div className="field-body">
                            <div className="field is-expanded">
                                <div className="field has-addons">
                                    <p className="control">
                                        <a className="button is-static">
                                            +34
          </a>
                                    </p>
                                    <p className="control is-expanded">
                                        <input className="input" type="tel" placeholder="Teléfono" name="phone" value={this.state.phone} onChange={e => this.handleChange(e)} />
                                    </p>
                                </div>
                                <p className="help white">No pongas un cero al principio</p>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label white">Dirección</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input className="input" type="text" name="adress" placeholder="Dirección" value={this.state.adress} onChange={e => this.handleChange(e)} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label white">Descripción</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <textarea className="textarea" name="description" placeholder="Describe un poco tu restaurante y qué ingredientes usas" value={this.state.description} onChange={e => this.handleChange(e)} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label">

                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input type="submit" value="Sign up" className="button is-rounded is-focused is-hovered is-light" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupRest;


/* 
                    <div className="column is-6 is-offset-3">
                        <div className="field is-grouped is-grouped-centered">
                            <div className="control">
                                <fieldset>
                                    <input className="input" type="text" placeholder="Nombre de tu restaurante" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
                                </fieldset>
                            </div>
                        </div>
                        <div className="field is-grouped is-grouped-centered">
                            <div className="control">
                                <fieldset>
                                    <input className="input" type="number" placeholder="Teléfono" name="phone" value={this.state.phone} onChange={e => this.handleChange(e)} />
                                </fieldset>
                            </div>
                        </div>

                        <div className="field is-grouped is-grouped-centered">
                            <div className="control">
                                <fieldset>
                                    <input className="input" type="text" name="description" placeholder="Descripción" value={this.state.description} onChange={e => this.handleChange(e)} />
                                </fieldset>
                            </div>
                        </div>

                        <div className="field is-grouped is-grouped-centered">
                            <div className="control">
                                <fieldset>
                                    <input className="input" type="text" name="adress" placeholder="Dirección" value={this.state.adress} onChange={e => this.handleChange(e)} />
                                </fieldset>
                            </div>
                        </div>
                        <div className="field is-grouped is-grouped-centered">
                            <div className="control">
                                <fieldset>
                                    <input className="input" type="text" placeholder="Propietario" name="owner" value={this.state.owner} onChange={e => this.handleChange(e)} />
                                </fieldset>
                            </div>
                        </div>
                    </div>

                    <input type="submit" value="Sign up" className="button is-rounded is-focused is-hovered is-light" />
                </form>

            </div> */




