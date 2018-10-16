import React, { Component } from 'react';
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
                console.log(users)

                this.setState({ users })
                console.log(this.state)
            })
    }


    render() {
        if (this.state.users)
            return (
                <div>
                    <p>Esto mostrará los usuarios a la venta</p>
                    {this.state.users.map((user, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <p>{user.username}</p>
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