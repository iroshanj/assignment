import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import User from './Dashboard/User';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/User' component={User}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
