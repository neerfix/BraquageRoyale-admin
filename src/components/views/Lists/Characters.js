import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import ButtonGroupAction from "./ButtonGroupAction";
class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "characters",
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
                        <th>Name</th>
                        <th>url_image</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.slice(this.props.startRange, this.props.endRange).map( (map, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{map.id}</td>
                                <td>{map.name}</td>
                                <td>{map.url_image}</td>
                                <td>
                                    <ButtonGroupAction data={this.props.data} id={map.id} type="characters"/>
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
