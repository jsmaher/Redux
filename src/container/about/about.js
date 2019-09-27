import React from 'react';
import { connect } from 'react-redux';
import {changeName,changeNam} from '../Store/action'

class About extends React.Component{
    render(){
console.log(this.props)
        return (
            <div>
               <center>
                <h1>Redux Home Page</h1>
                <h1>{this.props.user}</h1>
               <br />
                {/* <input /> <br /> */}
                <button onClick = {()=> this.props.changeName(this.props.user+1)}>+</button>
                <br />
                <button onClick = {()=> this.props.changeNam(this.props.user-1)}>-</button>

                </center>
            </div>
        )
 
    }
}
const mapStateToProps = state =>{
    return {
        user : state.counter

    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeName : (jj) => dispatch(changeName((jj))),
        changeNam : (j) => dispatch(changeNam((j)))

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(About)