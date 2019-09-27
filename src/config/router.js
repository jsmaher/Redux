import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home, About} from './../container';
function Router2(){
    return(
<Router>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>

</Router>
    )
}
export default Router2