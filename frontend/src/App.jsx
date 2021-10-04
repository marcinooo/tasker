import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MainNavbar from './components/Navbar';
import TasksView from './views/TasksView';
import TaskView from './views/TaskView';

function App() {
  return (
    <>
      <Router>
        <MainNavbar />
        <Switch>
          <Route exact path="/tasks" component={TasksView} />
          <Route exact path="/tasks/:id" component={TaskView} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
