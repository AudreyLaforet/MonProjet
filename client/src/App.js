// client/src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Materiaux from './components/Materiaux';
import Categories from './components/Categories';


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact component={Dashboard} />
        <Route path="/materiaux" component={Materiaux} />
        <Route path="/categories" component={Categories} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

