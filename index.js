//Definng Constants

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER = "ADD_USER"



//state
const initialCounterState = {
    count : 0,
}
const initialUserState = {
    users : [{name: "Anisul Islam"}],
}

//Action - Object - Type, Payload
//Increment counter

const incrementCounter = () =>{
    return {
        type: 'INCREMENT',
    }

}

//Decrement Counter
const decrementCounter = () =>{
    return {
        type: 'DECREMENT',
    }

}
//Add  User
const addUser = () =>{
    return {
        type: 'ADD_USER',
        payload:{name:'Jalil'}
    }

}

//create reducer for counter
const counterReducer = (state = initialCounterState, action) => {

    switch (action.type){
        case INCREMENT :
           return {
            ...state,
                count : state.count + 1
            }

        case DECREMENT :
            return {
                ...state,
                    count : state.count - 1
                }

        default :
        state
    }
}