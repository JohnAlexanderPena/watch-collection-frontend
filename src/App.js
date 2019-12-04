import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './dashboard/LandingPage'
import SearchBar from './components/SearchBar'


function App() {
  return (
  <Router>
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Switch>
        <Route exact path="/search" component={SearchBar} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
