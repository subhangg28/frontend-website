import React,{Component} from 'react';
import Main from './components/MainComponent';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {
  render(){
  return (
    <Provider store={store} >
       <div>
          <Main/>  
        </div>
    </Provider>  
         );
  } 
}
export default App;
