import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './container/Store'
import Router2 from './config/router'

class App extends React.Component{
  render(){
    return(
<div>

      <Provider store={store}>
      <Router2/>
 </Provider>

</div>
    )
  }
}

export default App;
