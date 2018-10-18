import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
  // REVISAR
  render() {
    if (this.state.items)
      return (
        <div className="ShowUsers column is-6 is-offset-3">
          <p>Artículos a la venta: </p>
          <div className="columns">
                <div className="column">
                  <p>Artículo</p>
                </div>
                <div className="column">
                  <p>Precio</p>
                </div>
                <div className="column">
                  <p>Vendedor</p>
                </div>
                <div className="column">
                  <p>Cantidad disponible</p>
                </div>
              </div>
          <div >{this.state.items.map(item => {
            return (
              <div className="columns">
                <div className="column">
                  <p>{item.itemName}</p>
                </div>
                <div className="column">
                  <p>{item.price}</p>
                </div>
                <div className="column">
                <Link to={'/profile/'+ item.sellerId}>{item.sellerName}</Link>
                </div>
                <div className="column">
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

/* 

  <div>
                  <p>{item.sellerName}</p>
                </div>
<div className="">
<p>{item.price}</p>
</div>
<div className="">
<p>{item.qty}</p>
</div>

 */