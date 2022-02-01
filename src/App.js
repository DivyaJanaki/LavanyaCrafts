import {Switch, Route } from 'react-router-dom';
import Home from './Components/Home/home';
import Shop from './Components/shopping/shop'
import ItemDetails from './Components/shopping/itemDetails'
import CartPage from './Components/Pages/cartPage'
import About from './Components/About/aboutUs'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Shop" component={Shop}/>
      <Route path="/product/:id" component={ItemDetails}/>
      <Route path="/Cart" component={CartPage}/>
      <Route path="/About" component={About}/>
      </Switch>
    </div>
  );
}

export default App;
