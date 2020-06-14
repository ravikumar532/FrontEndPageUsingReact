import React ,{Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar'
import  Productlist  from './component/Productlist'
import  Product from'./component/product'
import Details  from'./component/Details'
import Cart from'./component/cart'
import Default  from'./component/Default'
 class App extends Component{
   render()
   {
  return (
   <React.Fragment>
    < Navbar></Navbar>
    <switch>
      <Route  exact  path="/" component={Productlist}></Route>
      <Route path="/details" component={Details}></Route>
      <Route path="/Default" component={Default}></Route>
      <Route path="/cart" component={Cart}></Route>
    </switch>
   </React.Fragment>
  );
  }
}

export default App;
