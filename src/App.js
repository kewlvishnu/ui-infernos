import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Get from "./components/Get"
import Delete from "./components/Delete";
import Post from "./components/Post";

function App() {
  return (
      <Router basename={"/ui"}>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to={`${process.env.PUBLIC_URL}/get`}>Get</Link>
                      </li>
                      <li>
                          <Link to={`${process.env.PUBLIC_URL}/post`}>Post</Link>
                      </li>
                      <li>
                          <Link to={`${process.env.PUBLIC_URL}/delete`}>Delete</Link>
                      </li>
                  </ul>
              </nav>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                  <Route path={`${process.env.PUBLIC_URL}/get`}>
                      <Get />
                  </Route>
                  <Route path={`${process.env.PUBLIC_URL}/post`}>
                      <Post />
                  </Route>
                  <Route path={`${process.env.PUBLIC_URL}/delete`}>
                      <Delete />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
