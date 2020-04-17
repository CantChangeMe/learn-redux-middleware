const initialState ={
    count:0
}

const reducer = (state = initialState,action)=>{
    const newState = {...state};    
    if(action.type === "OnKeyUp"){
        newState.count +=1; 
    }
    if(action.type === "OnKeyDown"){
        newState.count-=1;
    }

    return newState;
}

export default reducer;