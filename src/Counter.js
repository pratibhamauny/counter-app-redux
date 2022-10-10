
import React from 'react'
import {connect} from 'react-redux'

const Counter = (props) => {
  return (
    <div>
        <p>count : {props.count}</p>
        <p><button onClick={props.incrementHandler}>  +  </button>&nbsp;&nbsp;&nbsp;
        <button onClick={props.decrementHandler}>  -  </button>
        <button onClick={props.incrementBy10}>  Increment by 10  </button>
        <button onClick={props.decrementBy10}>  Decrement by 10  </button></p>
    </div>
  )
}

const mapStateToProps=state=>{
    return{
        count:state.count
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        incrementHandler:()=>dispatch({type:"INCREMENT"}),
        decrementHandler:()=>dispatch({type:"DECREMENT"}),
        incrementBy10:()=>dispatch({type:"INC-10",payload:10}),
        decrementBy10:()=>dispatch({type:"DEC-10",payload:10})
    }
}
export  default connect(mapStateToProps,mapDispatchToProps) (Counter)
