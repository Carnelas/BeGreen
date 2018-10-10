import React from 'react';
import axios from 'axios';

export class newItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name, //¿igual que solo name?
            seller: props.seller,
            price: props.price
        }
    }

    submitForm = e => {
        axios.put(`http://localhost:3000/api/item/${this.props._id}`, this.state)
            .then( () => {
                if(this.props.onItemCreate){
                    this.props.onItemCreate();
                }
            })
}
//revisar los onChange de abajo \/ \/ \/

render(){
    let {name, seller, price} = this.state;
    // let name = this.state.name;
    // same con los demás
    return (
        <div> 
            <label>Nombre del producto</label>
            <input type="text" value={name} onChange={e=> this.setState({title:e.currentTarget.value})}/>
            <label>Vendedor</label>
            <input type="text" value={seller} onChange={e=> this.setState({seller:e.currentTarget.value})}/>
            <label>Precio</label>
            <input type="text" value={price} onChange={e=> this.setState({price:e.currentTarget.value})}/>
            <button onClick={this.submitForm}>Edit this project</button>
        </div>
    );
}
}