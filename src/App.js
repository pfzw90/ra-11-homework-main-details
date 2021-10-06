import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import List from './components/List.jsx';
import Item from './components/Item.jsx';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col">
            <Switch>
              <Route exact path='/' component={List}/>
              <Route exact path='/:id/details' component={Item}/>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
