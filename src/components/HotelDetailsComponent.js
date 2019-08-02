import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Device from './DeviceComponent';
import * as actions from '../redux/ActionCreators';
import { Loading } from './LoadingComponent';


 const mapStateToProps = state => {
  return{
    hotel: state.hotel
  }
}
const mapDispatchToProps = (dispatch) => ({
   actions: bindActionCreators(actions, dispatch)

});
   

  class HotelDetails extends Component{  
    handleonChange = (event) => {
      this.props.actions.fetchDeviceDetails(event.target.value);  
     

      
       
		 }
    render(){
    	if (this.props.hotel.isLoadingHotel) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (this.props.hotel.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{this.props.hotel.errMess}</h4>
                </div>
            </div>
        );
    }
    else {
      let abc = this.props.hotel.hotel.data;
         let optionItems = abc.map((jkill) =>
            <option value={jkill.deviceId}>{jkill.roomNo+")"}</option>
         );
    
     
    	return(

        <div className="container" align="center">
            
          
            
            
            <select onChange={this.handleonChange.bind(this)}> 
                {optionItems}
             </select>
         <div className="container" align="center">    
             <Device/>
        
        </div>    

        </div>   

  
   		);
    }
	}
    
 }
export default connect(mapStateToProps, mapDispatchToProps)(HotelDetails);