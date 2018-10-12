import React, { Component } from 'react';
import Items from './Items'

class Add extends Component {
  constructor(props){
    super(props);
    this.state = { itemName: '', seller: '', price: ''};
    this.service = new Items();
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const itemName = this.state.itemName;
    const seller = this.state.seller;
    const price = this.state.price;

    this.service.add(itemName, seller, price)
    .then( response => {
        this.setState({
            itemName: "", 
            seller: "",
            price: "",
        });
        this.props.getItem(response.item)
    })
    .catch( error => console.log(error) )
  }

 handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      

  render() {
    return(
      <div>
        <h3>¿Qué quieres poner a la venta?</h3>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>itemName:</label>
            <input type="text" name="itemName" value={this.state.itemName} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          
          <fieldset>
            <label>seller:</label>
            <input type="text" name="seller" value={this.state.seller} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>price:</label>
            <input type="num" name="price" value={this.state.price} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <input type="submit" value="Add" />
        </form>

      </div>
    )
  }
}

export default Add;