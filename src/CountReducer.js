const initialState={
    count:0
}

const countReducer=(state=initialState,action)=>{
    // const newState={...state}
    // console.log(state);
    // console.log("new state :",newState)
    switch(action.type){
        case "INCREMENT":
            return {count:state.count+1}
        case "DECREMENT":
            return {count:state.count-1}
        case "INC-10":
            return{count:state.count+action.payload}
        case "DEC-10":
            return{count:state.count-action.payload}
        default:
            return state
        
    }
}

export default countReducer