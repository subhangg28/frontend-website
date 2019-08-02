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
            // <div>

            //              <h4 className="center"> {device.hotelId} </h4> 
            //              <h4 className="center"> {device.isRelayOn} </h4> 
            //              <h4 className="center"> {device.roomNo} </h4> 
            //              <h4 className="center"> {device.deviceId} </h4>                                                
            //              <h4 className="center"> {device.powerValue} </h4> 
            //              <h4 className="center"> {device.currentValue} </h4> 
            //              <h4 className="center"> {device.voltageValue} </h4> 
            //              <h4 className="center"> {device.lastHeartBeatAt} </h4> 
            // </div>   
             <div className='table-list'>
             <table>
             <thead>
              <tr>
               <th>Hotel ID</th>
               <th>Device ID</th>
               <th>Room No</th>
               <th>Current Value</th>
               <th>Voltage Value</th>
               <th>Last Heart Beat At</th>
               <th>is Relay On</th>
                </tr>
              </thead>
       
              <tbody>
                  <tr>
                      <td align ="center">{JSON.stringify(device.hotelId)}</td>
                      <td align ="center">{device.deviceId}</td>
                      <td align ="center">{JSON.stringify(device.roomNo)}</td>
                      <td align ="center">{JSON.stringify(device.currentValue)}</td>
                      <td align ="center">{JSON.stringify(device.voltageValue)}</td>
                      <td align ="center">{JSON.stringify(device.lastHeartBeatAt)}</td>
                      <td align ="center">{JSON.stringify(device.isRelayOn)}</td>
                  </tr>    
              </tbody>
             </table>
            </div>  
        );
    }
   } 
   
}    
export default connect(mapStateToProps)(Device);