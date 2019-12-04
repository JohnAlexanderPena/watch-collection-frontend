import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './dashboard/LandingPage'
import SearchBar from './components/SearchBar'
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage}/>
          <Switch>
            <Route exact path="/search" component={SearchBar} />
          </Switch>
        </div>
      </Router>
  </Provider>
  );
}

export default App;
