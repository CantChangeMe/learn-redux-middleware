import React, { Component } from 'react';
import {connect} from 'react-redux';
class App extends Component{
 
  render(){
    return (
      <div className="App">
        <h1>Count: {this.props.someValue}</h1>
        <button onClick={this.props.onKeyUp}>OnKeyUp</button>
        <br></br>
        <br></br>
        <button onClick={this.props.onKeyDown}>OnKeyDown</button>
      </div>
    );
  }
}

const mapStateToProps= (state) =>{
  return({
    someValue:state.count
  })
}

const mapDispatchToProps = (dispatch)=>{
   return(
   {
   onKeyUp:()=>dispatch({type:"OnKeyUp"}),
   onKeyDown:()=>dispatch({type:"OnKeyDown"})
   })
 }

export default connect(mapStateToProps,mapDispatchToProps)(App);
