import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './components/Index';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route component={Index} path="/" exact />
          <Route component={Gallery} path="/gallery" exact />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
