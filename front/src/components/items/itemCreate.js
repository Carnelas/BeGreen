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
//revisar los onChange de abajo
render(){
    let {name, seller, price} = this.state;
    // let name = this.state.name;
    // same con los demás
    return (
        <div> 
            <label>Nombre del producto</label>
            <input type="text" value={name} onChange={e=> this.setState({title:e.currentTarget.value})}/>
            <label>Description</label>
            <input type="text" value={description} onChange={e=> this.setState({description:e.currentTarget.value})}/>
            <button onClick={this.submitForm}>Edit this project</button>
        </div>
    );
}
}