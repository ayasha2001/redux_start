import { createStore } from "redux";

const counterReducer = (state = {counter:0} , action) => {
    if(action.type==="IncrementBy5"){
        return {
            counter:state.counter+5
        }
    }
    if(action.type==="DecrementBy5"){
        return {
            counter:state.counter-5
        }
    }
    return state
}

const store = createStore(counterReducer)

export default store