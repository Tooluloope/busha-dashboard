import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SideBar } from './components/side-bar/side-bar.component';
import {  WrappedHeader } from './components/header/header.component';
import { Balance } from './components/balance/balance.components';
import { Transfer } from './components/transfer/transfer.components';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
        <SideBar />
      <section className='section'>
        <WrappedHeader />
        <Switch>
          <Route exact path='/' component={Balance} />
          <Route exact path='/balance' component={Balance} />
          <Route exact path='/transfer' component= {Transfer}></Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
