import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageLaout extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/user/register'>Register</Link></li>
          <li><Link to='/user/login'>Login</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default PageLaout;
