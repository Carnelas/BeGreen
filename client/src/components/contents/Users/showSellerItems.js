import React, { Component } from 'react';
import AuthService from '../../auth/AuthService';
import Item from '../Items/Items'


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
        console.log(this.props.params)
        
        if (this.state.items)
            return (
                <div>
                    {/* <p>Artículos que {this.state.loggedInUser.username} tiene a la venta: </p> */}
                    {this.state.items.map((item, index) => {
                        console.log(item)
                        return (
                            <div key={index}>
                                <div>
                                    <p>{item.itemName}</p>
                                </div>
                            </div>
                        )
                    })}

                    
                </div>)
        else
            return (<div>
                <p>HOLA</p>
            </div>)
    }
}

export default showSellerItems;