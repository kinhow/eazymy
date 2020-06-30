import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './layout/header';
import List from './pages/list';
import Details from './pages/details';

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/product/:id" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
