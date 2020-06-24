import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Profile from './components/Pages/Profile';
import Nav from './components/Nav';
import Alert from './components/Alert';
import AlertState from './context/alert/alertState';

const App = () => {
  return (
    <AlertState>
      <BrowserRouter>
        <Nav />
        <div className='container pt-4'>
          <Alert alert={ { text: 'test' } } />
          <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/about' component={ About } />
            <Route path='/profile/:name' component={ Profile } />
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  );
};

export default App;
