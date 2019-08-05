import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HotelDetails from './HotelDetailsComponent';
import * as actions from '../redux/ActionCreators';
import { Loading } from './LoadingComponent';
import HotelDetailsComponent from './HotelDetailsComponent';

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
    // console.log(event.target.value);
    // console.log("the code was here")

    //this.setState({hotelId:event.target.value})
    this.props.actions.fetchHotelDetails(event.target.value);
    //console.log(this.props.hotel.data);
     }
  // renderTableData() {
  //   return this.props.hotels.hotels.map((hotel, index) => {
  //      const { hotelId, hotelName } = hotel //destructuring
  //      return (
  //         <tr key={id}>
  //            <td>{id}</td>
  //            <td>{name}</td>
  //            <td>{age}</td>
  //            <td>{email}</td>
  //         </tr>
  //      )
  //   })
    
    
	render() {
	if (this.props.hotels.isLoading) {
        return(

            <div className="container" align="center">
                <div className="row">            
                    <Loading />
                </div>
            </div>
              );
          }

    else if (this.props.hotels.errMess) {
      return(
            <div className="container" align="center">
                <div className="row">            
                    <h4>{this.props.hotels.errMess}</h4>
                </div>
            </div>
        );
    }
    else {
     console.log('The code was here', this.props.hotels);
    	let hotels = this.props.hotels.hotels.data;
      console.log(hotels.data);
      let optionItems = hotels.map((hotel) =>
        <option value={hotel.hotelId} >{hotel.hotelName}</option>
          );

      return(





        
        
          
        //   <div className='table-list'>
         
        //        <table>
        //         <thead>
        //         <tr>
        //         <th>Hotel ID</th>
        //         <th>Hotel Name</th>
        //         </tr>
        //         </thead>
        //         <tbody>
        //         {this.renderTableData()}
        //           </tbody>
        //         </table>
        //         </div>
                                   

        <div className="container" align="center" >   
            <select onChange={this.handleonClick.bind()}>
             <option selected disabled>Hotel Name</option>
                {optionItems}
             </select>
    
         <HotelDetails/>

        </div>  


                
   
           //console.log(this.props.hotel.data);

   

             
                         
   		     );
    }

	}
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Ddown);