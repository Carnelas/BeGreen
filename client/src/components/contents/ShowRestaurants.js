import React, { Component } from 'react';
import Restaurant from './Restaurant';


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
            })
    }


    render() {
        if (this.state.restaurants)
            return (
                <div>
                    <p>Restaurantes que usan productos BeGreen: </p>
                    {this.state.restaurants.map((restaurant, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <p>{restaurant.name}</p>
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