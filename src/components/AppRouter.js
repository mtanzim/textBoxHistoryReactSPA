import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';

/* const Index = () => <h2>Home</h2>;

const Users = () => <h2>Users</h2>; */

const AppRouter = () => (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="ml-2">
              <Link to="/about/">About</Link>
            </li>

        </ul>
        </div>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      {/* <Route path="/users/" component={Users} /> */}
    </div>
  </Router>
);

export default AppRouter;