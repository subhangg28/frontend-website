import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
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
    


  
    handleonClick= (event) => {
      console.log(event.target.value)

    //  console.log(this.state.deviceId)
      this.props.actions.fetchDeviceDetails(event.target.value);
     // console.log(this.props.device.device)
     
		 }
    render(){
      //console.log("Loading is "+this.props.isLoadingHotel);
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

      console.log(this.props.hotel);
    	
      let abc = this.props.hotel.hotel.data;
               console.log(abc);

        let optionItems = abc.map((jkill) =>
                <option value={jkill.deviceId}>{jkill.roomNo+")"}</option>
            );

    	return(
    	   <div>
            <select onChange={this.handleonClick.bind(this)}>
                {optionItems}
             </select>
           <Device/>
             
          
           
          </div>   

   		);
    }
	}
    
 }
export default connect(mapStateToProps, mapDispatchToProps)(HotelDetails);