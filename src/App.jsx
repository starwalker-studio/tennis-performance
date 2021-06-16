import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './components/Index';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import News from './components/News';
import Torneos from './components/Torneos';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route component={Index} path="/" exact />
          <Route component={Gallery} path="/galeria" exact />
          <Route component={News} path="/noticias" exact />
          <Route component={Torneos} path="/torneos" exact />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
