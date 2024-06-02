//Definng Constants

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENTBYVALUE = "INCREMENTBYVALUE";
const ADD_USER = "ADD_USER";

const { createStore } = require("redux");
//state
const initialCounterState = {
users : ['Muhammad'],
  count: 1,
};
const initialUserState = {
  users: [{ name: "Anisul Islam" }],
};

//Action - Object - Type, Payload
//Increment counter

const incrementCounter = () => {
  return {
    type: "INCREMENT",
  };
};

//Decrement Counter
const decrementCounter = () => {
  return {
    type: "DECREMENT",
  };
};

//use payload
const incrementCounterByValue = (val) => {
  return {
    type: INCREMENTBYVALUE,
    payload: val,
  };
};

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

//Add  User
// const addUser = () =>{
//     return {
//         type: 'ADD_USER',
//         payload:{name:'Jalil'}
//     }

// }

//create reducer for counter
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case INCREMENTBYVALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      state;
  }
};

const userReducer = (state = initialCounterState, action) =>{

    switch(action.type){
        case ADD_USER:
            return{
                users : [...state.users, action.payload], 
                count : state.count + 1
            }

            default:
                state;
    }

}

//store - getState(), disPatch(), subscribe()
//create store
const store = createStore(userReducer);
store.subscribe(() => {
  console.log(store.getState());
});
//dispatch action
// store.dispatch(incrementCounter());
store.dispatch(addUser('Amena'));

// How it's happen : Jokhon incrementCounter dispatch Korbo tokhon chole jabe increment counter action a
// Okhane giye type check korbe increment kina  | Increment hole Reducer er moddhe chole asbe
// Reducer a giye check korbe type increment kina
//Increment hole reducer er logic ta complete korbe
// Korar por store.subscribe a chole asbe.
