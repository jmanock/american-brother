import React from 'react';

const Header = () =>(
  <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
    <a href='#' className='navbar-brand'>ABF</a>
    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle Navigation'>
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'><a className='nav-link' href='#About'>About</a></li>
        <li className='nav-item'><a className='nav-link' href='#Sign'>Sign Up</a></li>
      </ul>
    </div>
  </nav>
);

export default Header;
