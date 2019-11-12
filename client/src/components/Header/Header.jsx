import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Nav from './Sidenav/Sidenav';

class Header extends Component {
  state = {
    showNav: false
  };

  onHideNav = () => {
    this.setState({ showNav: false });
  };

  render() {
    return (
      <header>
        <div className="open_nav">
          <FontAwesomeIcon
            onClick={() => this.setState({ showNav: true })}
            icon={faCoffee}
            style={{ color: '#fff', padding: '10px', cursor: 'pointer' }}
          />
        </div>
        <Nav showNav={this.state.showNav} onHideNav={() => this.onHideNav()} />
        <Link to="/" className="logo">
          The Book Shelf
        </Link>
      </header>
    );
  }
}

export default Header;
