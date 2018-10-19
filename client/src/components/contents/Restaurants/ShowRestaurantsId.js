import React, { Component } from 'react';
import Restaurant from './Restaurant';


class ShowRestaurantsId extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.service = new Restaurant();
    }

    componentDidMount() {
        this.service.showRestaurantById(this.props.params.id)
            .then(res => {
                const restaurant = res;
                console.log(restaurant)
                this.setState({ restaurant })
                console.log(this.state.restaurant + "<<<<<<<<<<<<<<")

            })
    }

    render() {
        if (this.state.restaurant)
            return (
                <div className="ShowRestaurants column is-6 is-offset-3">
                    <h2>Información del restaurante {this.state.restaurant.name}</h2>
                    <div className=" columns">
                        <div className="column">
                            <p className="subs">Propietario</p>
                        </div>
                        <div className="column">
                            <p className="subs">Teléfono</p>
                        </div>
                        <div className="column">
                            <p className="subs">Descripción</p>
                        </div>
                        <div className="column">
                            <p className="subs">Dirección</p>
                        </div>
                    </div>
                    <div className=" columns">
                        <div className="column articles">
                            <p>{this.state.restaurant.owner}</p>
                        </div>
                        <div className="column articles">
                            <p>{this.state.restaurant.phone}</p>
                        </div>
                        <div className="column articles">
                            <p>{this.state.restaurant.description}</p>
                        </div>
                        <div className="column articles">
                            <p>{this.state.restaurant.adress}</p>
                        </div>
                    </div>
                </div>
            )
        else
            return (<div>
                ""
            </div>)
    }
}

export default ShowRestaurantsId;