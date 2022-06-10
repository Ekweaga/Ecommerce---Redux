import { CartActionTypes } from "./cartactiontypes"
import { addItemToCart } from "./cartutils"
import { removeItemFromCart } from "./cartutils"




const INITIAL_STATE = {
    cartItems:[]
}


const cartReducer = (state = INITIAL_STATE, action)=>{
switch(action.type){
    case CartActionTypes.CART_ADD_ITEM:
        return {
            ...state,
            cartItems:addItemToCart(state.cartItems,action.payload)
        }
        case CartActionTypes.CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload)
            }
            default:
                return state;
}
}

export default cartReducer;