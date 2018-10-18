import React, { Component } from 'react';
import Restaurant from './Restaurant';
import { Link } from 'react-router-dom';



class showRestaurants extends Component {
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
            }
            )
    }

    render() {
        if (this.state.restaurants)
            return (
                <div className="ShowRestaurants">
                    <p>Restaurantes que usan productos BeGreen: </p>
                    {this.state.restaurants.map((restaurant, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <Link to={'/restaurant/' + restaurant._id}>{restaurant.name}</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>)
        else
            return (<div></div>)
    }
}

export default showRestaurants;