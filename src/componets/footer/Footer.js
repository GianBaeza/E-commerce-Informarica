import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'




export default function Footer() {
  return (
    <footer className="Footer">
     
        <h3 className='b'>© 2022GB™</h3>
      
      <div className="SocialLinks">
        <Link to='https://www.facebook.com/'> <img className= 'a' src='https://i.postimg.cc/rwskSxwd/facebook-icon-icons-com-75091.png'/></Link>
        <Link to='https://twitter.com/home'> <img className= 'a' src='https://i.postimg.cc/7LbZYj2W/twitter.png'/></Link>
        <Link to='https://www.instagram.com/'> <img className= 'a' src='https://i.postimg.cc/J0312LfG/INSTAGRAM-icon-icons-com-65535.png'/></Link>
        <Link to='https://github.com/Chi4n'> <img className= 'a' src='https://i.postimg.cc/GpsnfRYd/foldergreygit-93078.png'/></Link>
      
      </div>
    </footer>
  );
}
