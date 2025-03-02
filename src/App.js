import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Get from "./components/Get";
import Delete from "./components/Delete";
import Post from "./components/Post";
import { createBrowserHistory } from 'history';

function App() {
  return (
      <Router basename="/ui">
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/get">Get</Link>
                      </li>
                      <li>
                          <Link to="/post">Post</Link>
                      </li>
                      <li>
                          <Link to="/delete">Delete</Link>
                      </li>
                  </ul>
              </nav>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                  <Route path="/get">
                      <Get />
                  </Route>
                  <Route path="/post">
                      <Post />
                  </Route>
                  <Route path="/delete">
                      <Delete />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

export default App;
