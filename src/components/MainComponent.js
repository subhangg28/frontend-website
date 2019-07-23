import React,{Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Ddown from './DdownComponent';
import HotelDetails from './HotelDetailsComponent';
import './App.css';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      hotels: HOTELS,
      selectedHotel: null
    };
  }
  onHotelSelect(hotelId){
    this.setState({selectedHotel:hotelId});
  }
  render(){
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/">Hotel List</NavbarBrand>
        </div>
      </Navbar>  
       <Ddown hotels={this.state.hotels} onClick={(hotelId)=>this.onHotelSelect(hotelId)}/>
       <HotelDetails hotel={this.state.hotels.filter((hotel)=> hotel.id=== this.state.selectedHotel )[0]} />
    </div>
    );
  } 
}


export default Main;
