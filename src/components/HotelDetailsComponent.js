import React,{Component} from 'react';
import Device from './DeviceComponent';
import {connect} from 'react-redux';
import {fetchDeviceDetails} from '../redux/ActionCreators';
import { Loading } from './LoadingComponent';


 const mapStateToProps = state => {
  return{
    device: state.device
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchDeviceDetails:()=>{dispatch(fetchDeviceDetails)}
});
   

  class HotelDetails extends Component{
  constructor(props){ 
    super(props);
    this.handleonClick = this.handleonClick.bind(this);
   }
   componentDidMount(){
   this.props.fetchDeviceDetails();
    }  
    handleonClick(id) {
      this.props.fetchDeviceDetails(id);
        return(
          <div>
           <Device device= {this.props.device.device}
              isLoading={this.props.device.isLoading}
              errMess={this.props.device.errMess}
              />
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
    else if (this.props.hotel!= null){
    	let hotel = this.props.hotel;
        let optionItems = hotel.map((device) =>
                <option key={device.deviceId} onClick={() => {this.handleonClick(device.deviceId)}}>{device.roomNo}</option>
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
export default connect(mapStateToProps, mapDispatchToProps)(HotelDetails);