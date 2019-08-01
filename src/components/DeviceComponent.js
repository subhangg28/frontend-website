import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Loading } from './LoadingComponent';
const Device=(props) => {
 
    if (props.isLoadingDevice) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else
    { 
        let device = props.device.data;
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
export default Device;