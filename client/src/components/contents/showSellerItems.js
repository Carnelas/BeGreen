import React, { Component } from 'react';
import AuthService from '../auth/AuthService';



class showSellerItems extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedInUser: null };
        this.service = new Item();
        this.auth = new AuthService();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
      }

    componentDidMount() {
        this.service.showSellerItems()
            .then(res => {
                const items = res;
                this.setState({ items })
            })
    }


    render() {
        if (this.state.items)
            return (
                <div>
                    <p>Artículos que {this.state.loggedInUser.username} tiene a la venta: </p>
                    {this.state.items.map((item, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        )
                    })}

                    
                </div>)
        else
            return (<div></div>)
    }
}

export default showSellerItems;