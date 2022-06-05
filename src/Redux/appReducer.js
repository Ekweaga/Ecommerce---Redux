import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./Cartfolder/cartReducer";

const appReducer = combineReducers({
    cart:cartReducer
})

const persistConfig = {
    key : 'food-shop',
    storage,
    whitelist :['cart']
}
export default persistReducer(persistConfig, appReducer)