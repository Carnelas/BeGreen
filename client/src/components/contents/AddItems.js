import React, { Component } from 'react';
import Items from './Items';
import User from './User';



class AddItems extends Component {
  constructor(props) {
    super(props);
    this.state = { itemName: '', sellerId: '', sellerName: '', price: '', qty: '' };
    this.service = new Items();
    this.seller = new User();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const itemName = this.state.itemName;
    const {id, username} = JSON.parse(this.state.user);
    const price = this.state.price;
    const qty = this.state.qty;
    console.log(id, username)
    this.service.item(itemName, id, username, price, qty)
      .then(response => {
        this.setState({
          itemName: "",
          sellerId: "",
          sellerName: "",
          price: "",
          qty: ""
        });
        this.props.getItem(response.item)
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  //revisar esto 
  componentDidMount() {
    this.seller.showUsers()
      .then(res => {
        const users = res;
        this.setState({ users })
      })
  }


  render() {
    return (
      <div>
        <h3>¿Qué quieres poner a la venta?</h3>

        <form onSubmit={this.handleFormSubmit}>
          <div class="field">
            <div class="control">
              <fieldset>
                <input class="input" placeholder="Artículo" type="text" name="itemName" value={this.state.itemName} onChange={e => this.handleChange(e)} />
              </fieldset>
            </div>
          </div>
          <div class="select">
            <div class="control">
              <fieldset>
                <select name="user" onChange={e => this.handleChange(e) } >
                  {
                    this.state.users ? this.state.users.map((user) => {
                    return (
                      <option value={JSON.stringify({id:user._id,  username:user.username})}>
                        {user.username}
                      </option>
                    )
                  }) : ""
                  }
                </select>
              </fieldset>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <fieldset>
                <input class="input" placeholder="Precio" type="number" name="price" value={this.state.price} onChange={e => this.handleChange(e)} />
              </fieldset>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <fieldset>
                <input class="input" placeholder="Cantidad" type="number" name="qty" value={this.state.qty} onChange={e => this.handleChange(e)} />
              </fieldset>
            </div>
          </div>
          <input type="submit" value="AddItems" />
        </form>
      </div >
    )
  }
}

export default AddItems;