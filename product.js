const { createStore } = require("redux");
//Define porduct const
const PRODUCTS = "PRODUCTS"
const ADD_PRODUCT = "ADD_PRODUCT"

//Define cart const
const ADD_CART_ITEM = "ADD_CART_ITEM"
const GET_CART_ITEMS = "PRODGET_CART_ITEMS"


//State for procut

const productState = {
    products : ["Sugar", "Salt"],
    numberOfProducts :  2
}

//State for card
const cartState = {
    cart : ["Soap"],
    numberOfProducts :  1
}

//Action

const getProducts = () =>{
    return {
        type: PRODUCTS,
      };

}

const addProducts = (product) =>{

    return {
        type : ADD_PRODUCT,
        payload : product
    }

}

//Action for cart

const getCart = () =>{
    return{
        type: GET_CART_ITEMS
    }
}

const addCart = (cart) =>{

    return{
        type : ADD_CART_ITEM,
        payload : cart
    }
}

//Product reducer
const productReducer = ( state = productState , action) =>{

    switch(action.type){
        case PRODUCTS:
            return{
             products:   state.products,
             numberOfProducts : state.numberOfProducts
            }
    }


}

const cartReducer = ( state = cartState , action) =>{

    switch(action.type){
        case GET_CART_ITEMS:
            return{
            ...state,
            }

            case ADD_CART_ITEM:
            return{
                cart : [...state.cart, action.payload],
                numberOfProducts : state.numberOfProducts + 1
            }
    }


}

//product store
const store = createStore(productReducer);
store.subscribe(() => {
  console.log(store.getState());
});
//cart store
const cartStore = createStore(cartReducer);
cartStore.subscribe( () =>{
    console.log(cartStore.getState())
})



//dispatch Procut store
store.dispatch(getProducts())

//dispatch cart store

cartStore.dispatch(getCart());
cartStore.dispatch(addCart("porota"));
