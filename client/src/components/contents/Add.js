import React, { Component } from 'react';
import Items from './Items'

//añade items al back

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = { itemName: '', seller: '', price: '', qty: '' };
    this.service = new Items();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const itemName = this.state.itemName;
    const seller = this.state.seller;
    const price = this.state.price;
    const qty = this.state.qty;

    this.service.item(itemName, seller, price, qty)
      .then(response => {
        this.setState({
          itemName: "",
          seller: "",
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


  render() {
    return (
      <div>
        <h3>¿Qué quieres poner a la venta?</h3>

        <form onSubmit={this.handleFormSubmit}>
          <div class="field">
            <div class="control">
              <fieldset>
                {/* <label>Artículo</label> */}
                <input class="input" placeholder="Artículo" type="text" name="itemName" value={this.state.itemName} onChange={e => this.handleChange(e)} />
              </fieldset>
            </div>
          </div>

          <div class="field">
          <div class="control">
            <fieldset>
{/*               <label>Vendedor:</label>
 */}              <input class="input" placeholder="Vendedor" type="text" name="seller" value={this.state.seller} onChange={e => this.handleChange(e)} />
            </fieldset>
          </div>
          </div>

 <div class="field">
          <div class="control">
        <fieldset>
{/*           <label>Precio:</label>
 */}          <input class="input" placeholder="Precio" type="number" name="price" value={this.state.price} onChange={e => this.handleChange(e)} />
        </fieldset>
        </div>
          </div>

 <div class="field">
          <div class="control">
        <fieldset>
{/*           <label>Cantidad:</label>
 */}          <input class="input" placeholder="Cantidad" type="number" name="qty" value={this.state.qty} onChange={e => this.handleChange(e)} />
        </fieldset>
         </div>
         </div>

        <input type="submit" value="Add" />
        </form>

      </div >
    )
  }
}

export default Add;