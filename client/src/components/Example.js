import React from "react";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Nav, NavItem, NavLink } from "reactstrap";

const Example = props => {
  return (
    <Router>
      <div>
        <p>Galvin Family Recipes</p>
        <Nav>
          <NavItem>
            <NavLink href="#">Apps</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Entrees</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Deserts</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Grocery List</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Reviews</NavLink>
            {/* <Link to="/users">Users</Link> */}
          </NavItem>
        </Nav>
        <hr />
      </div>
    </Router>
  );
};

export default Example;
