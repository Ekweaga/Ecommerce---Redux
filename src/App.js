
import './App.css';
import Home from './pages/Home'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Cart from './pages/Cart';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact>
        <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart/>
        </Route>
      </Switch>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
