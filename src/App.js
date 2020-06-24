import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Profile from './components/Pages/Profile';
import Nav from './components/Nav';

const App = () => {
  return (<BrowserRouter>
      <Nav />
      <div className='container pt-4'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/profile/:name' component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
