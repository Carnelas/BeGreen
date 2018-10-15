import React, { Component } from 'react';
import Items from './Items';


class SellingItems extends Component {
  //mirar cómo muestra los proyectos marc
  constructor(props) {
    super(props);
    this.state = {  }
    this.service = new Items();
  }

  componentDidMount() {
    console.log("entra")
    this.service.showItems()
      .then(res => {
        this.setState({ items: [...res] })
      })
  }


  render() {
    console.log(this.state.items)
    if(this.state.items)
    return (
      <div>
        <p>Esto mostrará los artículos a la venta</p>
        <div>{this.state.items.map(item => {
          return (
            <div key={item.itemName}>
              <div> 
                <h3>{item.itemName}</h3>
                <h4>{item.seller}</h4>
                <h4>{item.price}</h4>
              </div>
            </div>
          )
        })}
        </div>
      </div>)
    else 
    return(<div></div>)
  }
}

export default SellingItems;