import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import axios from "axios";
export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = this.intialState;
    this.seatChange=this.seatChange.bind(this);
    this.submitSeat=this.submitSeat.bind(this);
  }
    
    intialState =
    {
      address: "",
      floor: "",
      available_spaces: "",
      seat_capacity: ""
    };

    resetChange=() =>{
      this.setState(() =>this.intialState);
    }

    submitSeat= event =>{
      event.preventDefault();

      const seat={
        address: this.state.address,
        floor: this.state.floor,
        available_spaces: this.state.available_spaces,
        seat_capacity: this.state.seat_capacity
      };

      axios.post("http://localhost:8080/api/admin/AddadminstrationOffice",seat)
               .then(response =>{
                 if(response.data !=null){
                   this.setState(this.intialState);
                   alert("Adminstration Office Added Successfully");
                 }
                 });
    }
  

  seatChange= event=> {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  render() {
    const {address, floor, available_spaces, seat_capacity}=this.state;
    return (
      <div>
      <div className="container">
        <header className="jumbotron">
          <h3>Welcome to the Online Organization AdminstrationOffices System</h3>
          <p>This Can be Accessible by Admin Department only.</p>
        </header>
      </div>
      <Form  className="card card-container" onSubmit={this.submitSeat} onReset={this.resetChange} id="seatFormId"><h4>AdminstrationOffices System</h4>
        <div>
                <div className="form-group">
                  <label htmlFor="name">Address</label>
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
                  <label htmlFor="email">Floor Details:</label>
                  <Input
                    required 
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    name="floor"
                    value={floor}
                    onChange={this.seatChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Available_Spaces</label>
                  <Input
                    required 
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    name="available_spaces"
                    value={available_spaces}
                    onChange={this.seatChange}
                    placeholder="Enter How many Spaces Left"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mobile">Seat-Capacaity:</label>
                  <Input
                    required 
                    autoComplete="off"
                    type="number"
                    className="form-control"
                    name="seat_capacity"
                    value={seat_capacity}
                    onChange={this.seatChange}
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">Submit AdminstrationOffice</button>
                  <button type="reset" className="btn btn-secondary btn-block">Reset AdminstrationOffice</button>
                </div>
        </div>
      </Form>   
      </div>
    );
  }
  
}
