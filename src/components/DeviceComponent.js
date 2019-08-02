import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Loading } from './LoadingComponent';
 const mapStateToProps = state => {
  return{
    device: state.device
  }
}
class Device extends Component{
   render(){
    if (this.props.device.isLoadingDevice) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (this.props.device.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{this.props.device.errMess}</h4>
                </div>
            </div>
        );
    }
    else
    { 
        let device = this.props.device.device.data;
        return (  
            <div>

                         <h4> {device.hotelId} </h4> 
                         <h4> {device.isRelayOn} </h4> 
                         <h4> {device.roomNo} </h4> 
                         <h4> {device.deviceId} </h4>                                                
                         <h4> {device.powerValue} </h4> 
                         <h4> {device.currentValue} </h4> 
                         <h4> {device.voltageValue} </h4> 
                         <h4> {device.lastHeartBeatAt} </h4> 
            </div>   
        );
    }
   } 
   
}    
export default connect(mapStateToProps)(Device);