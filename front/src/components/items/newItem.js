/* 


esto de momento no sirve

import React from 'react';
import axios from 'axios';

export class newItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name, //¿igual que solo name?
            seller: props.seller,
            price: props.price
        }
    }

    submitForm = e => {
        axios.put(`http://localhost:3000/api/item/${this.props._id}`, this.state)
            .then(() => {
                if (this.props.onItemCreate) {
                    this.props.onItemCreate();
                }
            })
    }
} */