import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import Gravatar from 'react-gravatar';
import ButtonGroupAction from "./ButtonGroupAction";
import {Link} from "react-router-dom";

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "users",
            tokenACP: "",
            isLoading: false,
            data: this.props.data,
            activePage: '1',
        };
    }

    render() {
        return (
            <div>
                <Table striped bordered hover variant="dark" >
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Rank</th>
                        <th>Display Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.slice(this.props.startRange, this.props.endRange).map( (user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.body.id}</td>
                                    <td>{user.body.player.rank}</td>
                                    <td>
                                        {user.body.firstname} {user.body.lastname}
                                    </td>
                                    <td>{user.body.email}</td>
                                    <td>{user.body.player.username}</td>
                                    <td>
                                        <ButtonGroupAction data={this.props.data} id={user.body.id} type="users"/>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default (Index);
