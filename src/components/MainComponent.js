import React,{Component} from 'react';
import Ddown from './Ddowncomponent';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {Button} from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/ActionCreators';


const mapDispatchToProps = (dispatch) => ({
  // fetchHotels:() =>{dispatch(fetchHotels)}
        actions: bindActionCreators(actions, dispatch)
});
class Main extends Component {
  constructor(props){ 
    super(props);
      this.handleonClick = this.handleonClick.bind(this);

   }
    handleonClick(){
    console.log(this.props.actions)
     this.props.actions.fetchHotels();
      console.log('Data fetched');  
    
    
      
  }

    render(){
    return (



    <div className="container" align="center">


     <Button  onClick={() => {this.handleonClick()}}> <h3>Get Hotels List</h3></Button> 
        <Ddown/>
    </div>
 

    );

  } 
}
export default connect(null,mapDispatchToProps)(Main);
