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
                this.setState({ users: [...res] })
            })
    }


    render() {
        console.log(this.state.users)
        if (this.state.users)
            return (
                <div>
                    <p>Esto mostrará los usuarios a la venta</p>
                    <div>{this.state.users.map(item => {
                        return (
                            <div>
                                <div key={User.username}>
                                </div>
                                <div>
                                    <p>{User.username}</p>
                                </div>
                            </div>
                        )
                    })}

                    </div>
                </div>)
        else
            return (<div></div>)
    }
}

export default ShowUsers;