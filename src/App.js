import '@stripe/stripe-js';
import './App.css';
import Home from './pages/Home'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import MainHome from './pages/MainHome';
import CartButton from './components/common/CartButton';
import ellipseimg from "./pages/images/Ellipse 42.png"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <div className="absolute top-0 right-0 -z-10">
<img src={ellipseimg}/>
      </div>
       <CartButton/>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact>
        <MainHome/>
        </Route>
        <Route path="/cart" exact>
          <Cart/>
        </Route>
        <Route path="/checkout" exact>
         <Checkout/>
        </Route>
      </Switch>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
