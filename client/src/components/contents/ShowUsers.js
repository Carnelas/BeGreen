import React, { Component } from 'react';
import User from '../User';
import { Link } from 'react-router-dom';


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
                <div className="ShowUsers">
                    <p>Esto mostrará los usuarios a la venta: </p>
                    {this.state.users.map((user, index) => {
                        return (
                            <div key={index}>
                                <div >
                                    <Link to={'/profile/' + user._id}>{user.username}</Link>
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