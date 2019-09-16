import React,{Component} from 'react';
import {Link} from 'react-scroll';

class Header extends Component{
  handleClick = (e) =>{
    console.log(e);
  }
  render(){
    return(
      <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
        <Link to='Top' className='navbar-brand'>ABF</Link>

        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle Navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'><Link to='About' className='nav-link'>About</Link></li>
            <li className='nav-item'><Link to='Sign' className='nav-link'>Newsletter</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
