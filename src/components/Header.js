import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <div id='main'>
      <div className='header-heading'>
        <h2>STEP UP YOUR</h2>
        <h1><span>FITNESS</span> WITH US</h1>
        <p className='details'>Build Your Body And Fitness With Professional Touch</p>
        <div className='header-btns'>
          <Link to='offer' smooth={true} duration={1000} className='header-btn'>JOIN US</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;