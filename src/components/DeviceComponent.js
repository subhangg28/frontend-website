import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
const Device=(props) => {
 
    if (props.isLoading) {
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
    else if (props.hotel != null)
    { 
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/ddown">Ddown</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.device.roomNo}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <ul>
                            {props.device.map(item=>(
                                <li key={item.deviceId}>
                                <div>{item.hotelId}</div>
                                <div>{item.deviceId}</div>
                                <div>{item.relayOn}</div>
                                <div>{item.roomNo}</div>
                                <div>{item.lastHeartBeatAt}</div>
                                <div>{item.powerValue}</div>
                                <div>{item.voltageValue}</div>
                                <div>{item.currentValue}</div>
                                </li>
                                ))}
                        </ul>
                    </div>                
                </div>
            </div>   
        );
    }
   
}    
export default Device;