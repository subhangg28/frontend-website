import React,{Component} from 'react';
import Ddown from './DdownComponent';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';
import {bindActionCreators} from 'redux';
import * as actions from '../redux/ActionCreators';
const mapStateToProps = state => {
  return{
    hotels: state.hotels
  }
}
const mapDispatchToProps = (dispatch) => ({
  // fetchHotels:() =>{dispatch(fetchHotels)}
  actions : bindActionCreators(actions, dispatch)
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
    <div>
      <Button onClick={() => {this.handleonClick()}}>Get Hotels List</Button>   
        
      <Ddown hotels ={this.props.hotels.hotels}
          isLoading={this.props.hotels.isLoading}
          errMess= {this.props.hotels.errMess}  />
       
    </div>

    );

  } 
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
