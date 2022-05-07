import React, { Component } from "react";
import {Button, ButtonGroup, Card, Table} from "react-bootstrap";
import axios from "axios";


export default class BoardModerator extends Component {
  constructor(props){
    super(props)
    this.state={
        seats: []
    };
}

componentDidMount(){
    axios.get("http://localhost:8080/api/admin/AdminstrationOffices")
    .then(response=>response.data)
    .then((data)=>{
        this.setState({seats:data});
    });
}
render(){
    return(
        <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header><h4>AdminstrationOffices List</h4></Card.Header>
        <Card.Body>
            <Table bordered hover striped variant="dark">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Floor</th>
                        <th>Available-Spaces</th>
                        <th>Seat-Capacity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.seats.length === 0 ?
                    <tr align="center">
                    <td colSpan="4"> Booking Seats Available</td>
                    </tr> :
                    this.state.seats.map((seat)=>(
                        <tr key={seat.id}>
                            <td>{seat.address}</td>
                            <td>{seat.floor}</td>
                            <td>{seat.available_spaces}</td>
                            <td>{seat.seat_capacity}</td>
                            <td>
                                <ButtonGroup>
                                    <Button size="sm" variant="outline-primary"></Button>{'  '}
                                    <Button size="sm" variant="outline-danger"></Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </Card.Body>
        </Card>
    )
}
  
}
