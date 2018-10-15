import React, { Component } from 'react';
import Private from './Private';


class SaleItems extends Component {
  //mirar cómo muestra los proyectos marc
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
    console.log(this.state.items)
    if (this.state.items)
      return (
        <div>
          <p>Esto mostrará los artículos a la venta</p>
          <div className="columns">{this.state.items.map(item => {
            return (
              <div className="column">
                <div key={item.itemName}>
                </div>
                <div className="column">
                  <p>{item.itemName}</p>
                </div>
                <div className="column">
                  <p>{item.seller}</p>
                </div>
                <div className="column">
                  <p>{item.price}</p>
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