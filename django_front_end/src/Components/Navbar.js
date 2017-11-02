import React, { Component } from 'react';
import { Link } from 'react-router'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><Link to="/Home">Home</Link></li>
      <li><Link to="/Books">Books </Link> </li>
      <li><Link to="/SignIN">Sign In </Link> </li>
      <li><Link to="/Register">Register </Link> </li>
      <li><Link to="/Profile">Profile </Link> </li>
      <li><Link to="/Contact">Contact </Link> </li>
    </ul>
  </div>
</nav>
    );
  }
}

export default  Navbar;
