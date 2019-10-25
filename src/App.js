import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.js'
import Home from './components/home/Home.js'
import BookDetails from './components/books/BookDetails.js'
import SignIn from './components/auth/SignIn.js';
import SignUp from './components/auth/SignUp.js';
import AddNewBook from './components/books/AddNewBook.js';
import Cart from './components/layout/Cart.js';
import Checkout from './components/layout/Checkout'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/book/:id' component={BookDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/add' component={AddNewBook} />
          <Route path='/cart' component={Cart} />
          <Route path='/checkout' component={Checkout} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
