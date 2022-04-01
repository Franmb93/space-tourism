import './navbar.scss';


function Navbar() {
    return (
        <nav className="navbar-container">
            <svg className="logo-img" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            <div className="rectangle"></div>
            <div className="navigation">
                <div className="element">00 HOME</div>
                <div className="element">01 DESTINATION</div>
                <div className="element">02 CREW</div>
                <div className="element">03 TECHNOLOGY</div>
            </div>
        </nav>
    );
  }
  
  export default Navbar;