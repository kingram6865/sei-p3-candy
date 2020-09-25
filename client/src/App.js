import React from 'react';
import { Switch, Router } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
