import React, { Component } from 'react';
import Items from './Items';

class SaleItems extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.service = new Items();
  }

  componentDidMount() {
    this.service.showItems()
      .then(res => {
        this.setState({ items: [...res] })
      })
  }

  render() {
    if (this.state.items)
      return (
        <div>
          <p>Esto mostrará los artículos a la venta: </p>
          <div className="">{this.state.items.map(item => {
            return (
              <div className="">
                <div key={item.itemName}>
                </div>
                <div className="">
                  <p>{item.sellerName}</p>
                </div>
                <div className="">
                  <p>{item.price}</p>
                </div>
                <div className="">
                  <p>{item.qty}</p>
                </div>
              </div>
            )
          })}

          </div>
        </div>)
    else
      return (<div></div>)
  }
}

export default SaleItems;