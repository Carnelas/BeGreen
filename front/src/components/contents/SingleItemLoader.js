/* 

//editando todavía. Esto debería cargar la información de un item individual



import React, { Component } from 'react';
import axios from 'axios';
import { Items } from './Items';

export class SingleItemLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            loading: props.item ? false : true
        }
    }

    componentWillMount() {
        if (!this.state.project) {
            this.getItem();
        }
    }

    getItem() {
        let { _id } = this.state.project;
        let url = `http://localhost:3000/api/projects/${_id}`;
        console.log(url);
        axios.get(url)
            .then(res => {
                console.log(res.data);
                this.setState({ project: res.data, loading: false });
            })
            .catch(e => console.log("EROOR PIDIENDO PROYECTO"));
    }

    render() {
        let { project, loading } = this.state;
        if (!loading) {
            return <ProjectItem {...project} editable={this.props.editable} onProjectChanged={() => this.getProject()} />
        } else {
            return <p>Loading...</p>
        }
    }



} */