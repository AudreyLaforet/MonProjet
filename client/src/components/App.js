import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Materiaux from './components/Materiaux';
import Categories from './components/Categories';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/materiaux" component={Materiaux} />
          <Route path="/categories" component={Categories} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

