import React, {Component} from 'react';
import logo from './logo.svg';
import Calendar from './Calendar';
import Time from './Time';
import Appointment from './Appointment';
import Main from './Main';
import './App.css';
import {BrowserRouter as Router, Switch, Route }from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
      <Main />
        <Switch>
        <Route path="/Main" component={Main} />
        <Route path="/Appointment" component={Appointment} />
        </Switch>
        </div>

        </Router>

    );
  }
}


export default App;
