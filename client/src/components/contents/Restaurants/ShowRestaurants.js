import React, { Component } from 'react';
import Restaurant from './Restaurant';
import { Link } from 'react-router-dom';



class ShowRestaurants extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.service = new Restaurant();
    }

    componentDidMount() {
        this.service.showRestaurants()
            .then(res => {
                const restaurants = res;
                this.setState({ restaurants })
            })
    }

    render() {
        if (this.state.restaurants)
            return (
                <div className="ShowRestaurants column is-6 is-offset-3">
                    <h2>Restaurantes Green:</h2>
                    <div className=" columns">
                        <div className="column">
                            <p className="subs">Restaurantes</p>
                        </div>
                        <div className="column">
                            <p className="subs">Descripción</p>
                        </div>
                    </div>
                    {this.state.restaurants.map((restaurant, index) => {
                        return (
                            <div key={index} className="columns">
                                <div className="column articles">
                                    <Link to={'/restaurants/' + restaurant._id}>{restaurant.name}</Link>
                                </div>
                                <div className="column articles">
                                    <p className="rest">{restaurant.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>)
        else
            return (<div></div>)
    }
}

export default ShowRestaurants;