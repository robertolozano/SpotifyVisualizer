import React from 'react';
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Music from './components/Music'
import Loading from './components/Loading'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About';

function App() {
  return (
    <Router>
      <Nav/>
      <React.Suspense fallback={<Loading />} >
        <Switch>
          <Route exact path='/' component={Music} />
          <Route exact path='/about' component={About} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
