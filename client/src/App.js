import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
