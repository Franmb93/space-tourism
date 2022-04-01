import './navbar.scss';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar-container">
            <svg className="logo-img" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            <div className="rectangle"></div>
            <div className="navigation">
            <NavLink to="/" className='element' activeClassName="active">00 HOME</NavLink>         
            <NavLink to="/destination" className='element' activeClassName="active">01 DESTINATION</NavLink>
            <NavLink to="/crew" className='element' activeClassName="active">02 CREW</NavLink>
            <NavLink to="/technology" className='element'  activeClassName="active">03 TECHNOLOGY</NavLink>
            </div>
        </nav>
    );
  }
  
  export default Navbar;