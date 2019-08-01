import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Device from './DeviceComponent';
import * as actions from '../redux/ActionCreators';
import { Loading } from './LoadingComponent';


 const mapStateToProps = state => {
  return{
    device: state.device
  }
}
const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(actions, dispatch)
});
   

  class HotelDetails extends Component{
     state = {
      deviceId : "101b"
    }

  
   
    handleonClick(event) {
      console.log(event.target.value)
    //  console.log(this.state.deviceId)
      this.props.actions.fetchDeviceDetails(event.target.value);
      console.log(this.props.device.device)
     
		 }
    render(){
      //console.log("Loading is "+this.props.isLoadingHotel);
	if (this.props.isLoadingHotel) {
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
    else {

      console.log(this.props.hotel);
    	
      let hotels = this.props.hotel.data;
               console.log(hotels);

        let optionItems = hotels.map((jkill) =>
                <option value={jkill.deviceId}>{jkill.roomNo+")"}</option>
            );

    	return(
    	   <div>
            <select onClick={this.handleonClick.bind(this)}>
                {optionItems}
             </select>
             <Device device= {this.props.device.device}
              isLoadingDevice={this.props.device.isLoadingDevice}
              errMess={this.props.device.errMess}
              />
             
          
           
          </div>   

   		);
    }
	}
    
 }
export default connect(mapStateToProps, mapDispatchToProps)(HotelDetails);