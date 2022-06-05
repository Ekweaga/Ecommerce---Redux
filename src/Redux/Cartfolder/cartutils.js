
export const addItemToCart=(cartItems,cartAddItem)=>{
const existingCartItem = cartItems.find((cartitem)=>cartitem.id === cartAddItem.id);

if(existingCartItem){
    return cartItems.map((cartitem)=>cartitem.id === cartAddItem.id ? {...cartitem, quantity: cartitem + 1} : cartitem)
}
return [...cartItems, {...cartAddItem,quantity:1}]
}
export const removeItemToCart=(cartItems,cartAddItem)=>{
    const existingCartItem = cartItems.find((cartitem)=>cartitem.id === cartAddItem.id);
    if(existingCartItem.quantity === 1){
            return cartItems.filter(cartitem=>cartitem.id !== cartAddItem.id)
    }
    return cartItems.map((cartitem)=>cartitem.id === cartAddItem.id ? {...cartitem, quantity: cartitem - 1} : cartitem)
}