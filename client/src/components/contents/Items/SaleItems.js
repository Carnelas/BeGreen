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
  // REVISAR
  render() {
    if (this.state.items)
      return (
        <div className="ShowUsers">
          <p>Esto mostrará los artículos a la venta: </p>
          <div >{this.state.items.map(item => {
            return (
              <div>
                <div key={item.itemName}>
                </div>
                <div>
                  <p>{item.itemName}</p>
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