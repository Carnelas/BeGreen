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
                <div className="restprofile column is-6 is-offset-3">
                    <div>
                        {this.state.restaurant.name}
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