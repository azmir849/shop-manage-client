import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import ShopManage from './components/ShopManage';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
           
          </Route>

          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/manage">
            <ShopManage></ShopManage>
          </Route>

          <Route path="*">

          </Route>
        </Switch>
      </Router>
  );
}

export default App;
