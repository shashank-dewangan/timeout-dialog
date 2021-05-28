import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';

const App = () => {
  return (
    <Router>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Login} exact />
    </Router>
  );
};

export default App;
