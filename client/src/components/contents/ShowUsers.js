import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import User from './User';



class ShowUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.service = new User();
    }

    componentDidMount() {
        this.service.showUsers()
            .then(res => {
                const users = res;
                this.setState({ users })
            })
    }

    render() {
        if (this.state.users)
            return (
                <div className="ShowUsers column is-6 is-offset-3">
                    <h2>Vendedores con artículos disponibles </h2>
                    <div className="columns">
                        <div className="column">
                            <p className="subs">Vendedor</p>
                        </div>
                        <div className="column">
                            <p className="subs">Teléfono</p>
                        </div>
                    </div>
                    {this.state.users.map((user, index) => {
                        return (
                            <div className="columns" key={index}>
                                <div className="column articles">
                                    <Link to={'/profile/' + user._id}>{user.username}</Link>
                                </div>
                                <div className="column articles">
                                    <p>{user.phone}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>)
        else
            return (<div></div>)
    }
}

export default ShowUsers;