import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchHotelDetails} from '../redux/ActionCreators';
import HotelDetails from './HotelDetailsComponent';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
  return{
    hotel:state.hotel
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchHotelDetails:()=>{dispatch(fetchHotelDetails)}
	});

class Ddown extends Component{
	constructor(props){ 
    super(props);
      this.handleonClick = this.handleonClick.bind(this);

   }
      
    handleonClick(id) {
    	this.props.fetchHotelDetails(id);
      return(
        <div>
          <HotelDetails hotel= {this.props.hotel.hotel}
            isLoading={this.props.hotel.isLoading}
            errMess={this.props.hotel.errMess} />
        </div>
        );
       }
	render(){
	if (this.props.isLoading) {
        return(

            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }

    else if (this.props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{this.props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (this.props.hotels!= null){
      console.log('The code was here');
    	let hotels = this.props.hotels;
        let optionItems = hotels.map((hotel) =>
                <option key={hotel.hotelId} onClick={() => {this.handleonClick(hotel.hotelId)}}>{hotel.hotelName}</option>
          );

    	return(
    	   <div>
             <select>
                {optionItems}
             </select>
           
          </div>  

   		     );
    }

	}
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Ddown);