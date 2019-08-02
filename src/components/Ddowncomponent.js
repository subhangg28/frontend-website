import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import HotelDetails from './HotelDetailsComponent';
import * as actions from '../redux/ActionCreators';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
  return{
    hotels:state.hotels
  }
}
const mapDispatchToProps = (dispatch) => ({
  //fetchHotelDetails:()=>{dispatch(fetchHotelDetails)}
 actions: bindActionCreators(actions, dispatch)
	});

class Ddown extends Component{
	  
    

    handleonClick = (event) => {
      console.log(event.target.value);
                console.log("the code was here")

      //this.setState({hotelId:event.target.value})
    	this.props.actions.fetchHotelDetails(event.target.value);
      //console.log(this.props.hotel.data);
       }
	render(){
	if (this.props.hotels.isLoading) {
        return(

            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }

    else if (this.props.hotels.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{this.props.hotels.errMess}</h4>
                </div>
            </div>
        );
    }
    else {
     // console.log('The code was here', this.props.hotels);
    	let hotels = this.props.hotels.hotels.data;
      // console.log(hotels.data);
        let optionItems = hotels.map((hotel) =>
                <option value={hotel.hotelId} >{hotel.hotelName}</option>
          );

    	return(

                <div className="row">            
            <select onChange={this.handleonClick.bind()}>
                {optionItems}
              </select>
              <HotelDetails/>  
              </div>  
                         
   		     );
           //console.log(this.props.hotel.data);
    }

	}
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Ddown);