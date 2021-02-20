import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';


function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={LogIn}/>
      <Route exact path="/signup" component={SignUp}/>
    </Switch>
  </Router>
  );
}

export default App;
