import React from 'react';
import './styles/main.scss'

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from './components/section/header';
import { Home } from './components/home';
import { FriendList } from './components/FriendList';

export function Main() {
  return (
    <div className="main-container content--centered flex-center">
      <Route exact path="/" component={Home} />
      <Route path="/friend-list" component={FriendList} />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter >
          <Route component={Header} />
          <Switch>
            <Main />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
