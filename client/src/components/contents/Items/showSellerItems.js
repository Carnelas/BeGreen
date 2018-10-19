import React, { Component } from 'react';
import AuthService from '../../auth/AuthService';
import Item from './Items'


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
        this.service.showSellerItems(this.props.params.id)
            .then(res => {
                const items = res;
                this.setState({ items })
            })
    }

    render() {
        if (this.state.items)
            return (
                <div className="items column is-6 is-offset-3">
                    <h2>Artículos a la venta de este vendedor:</h2>
                    <div className="columns">
                        <div className="column">
                            <p className="subs">Artículo</p>
                        </div>
                        <div className="column">
                            <p className="subs">Precio</p>
                        </div>
                        <div className="column">
                            <p className="subs">Cantidad</p>
                        </div>

                    </div>
                    {this.state.items.map((item, index) => {
                        return (
                            <div key={index} className="columns">
                                <div className="column articles">
                                    <p>{item.itemName}</p>
                                </div>
                                <div className="column articles">
                                    <p>{item.price}€</p>
                                </div>
                                <div className="column articles">
                                    <p>{item.qty}kg</p>
                                </div>
                            </div>
                        )
                    })}
                </div>)
        else
            return (<div>
                ""
            </div>)
    }
}

export default showSellerItems;