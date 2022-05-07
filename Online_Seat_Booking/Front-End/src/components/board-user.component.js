import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import axios from "axios";
/*import MyToast from "./MyToast";
import { Card, Form, Button, Col, InputGroup } from "react-bootstrap";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";*/

export default class BoardUser extends Component {
  constructor(props) {
    super(props);
    this.state = this.intialState;
    this.seatChange=this.seatChange.bind(this);
    this.submitSeat=this.submitSeat.bind(this);
  }
    
    intialState =
    {
      name: "",
      email: "",
      address: "",
      seats: "",
      mobile: "",
    };

    resetChange=() =>{
      this.setState(() =>this.intialState);
    }

    submitSeat= event =>{
      event.preventDefault();

      const seat={
        name: this.state.name,
        email: this.state.email,
        address: this.state.address,
        seats: this.state.seats,
        mobile: this.state.mobile
      };

      axios.post("http://localhost:8080/api/seatbooking/AddSeatBooking",seat)
               .then(response =>{
                 if(response.data !=null){
                   this.setState(this.intialState);
                   alert("Seat Booked Successfully");
                 }
                 });
    }
  

  seatChange= event=> {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  render() {
    const {name, email, address, mobile, seats}=this.state;
    return (
      <div>
      <div className="container">
        <header className="jumbotron">
          <h3>Welcome to the Online Organization Seat-Booking System</h3>
        </header>
      </div>
      <Form  className="card card-container" onSubmit={this.submitSeat} onReset={this.resetChange} id="seatFormId"><h4>Seat-Booking</h4>
        <div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <Input
                    required 
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={this.seatChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    required 
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={this.seatChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <Input
                    required 
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    name="address"
                    value={address}
                    onChange={this.seatChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mobile">Mobile No:</label>
                  <Input
                    required 
                    autoComplete="off"
                    type="number"
                    className="form-control"
                    name="mobile"
                    value={mobile}
                    onChange={this.seatChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="seats">Seats</label>
                  <Input
                    required 
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    name="seats"
                    value={seats}
                    onChange={this.seatChange}
                    placeholder="enter how many seats to Book"
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">Book Seat</button>
                  <button type="reset" className="btn btn-secondary btn-block">Reset Seat</button>
                </div>
        </div>
      </Form>   
      </div>
    );
  }
}
