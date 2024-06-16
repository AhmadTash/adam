import './Navbar.css'
import Logo from '../../assets/TRAIN with Adam.svg'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg p-0">
  <div className="container-fluid ">
    
        <a className="navbar-brand" href="#">
        <img src={Logo} alt="" width="125" height="45" className="d-inline-block align-text-top" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav justify-content-between">
        <a className="nav-link " aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">About Us</a>
        <a className="nav-link" href="#">Our Services</a>
        <a className="nav-link" aria-disabled="true">Contact Us</a>
        <a className="nav-link getStartedBtn" href="" >Get Started</a>
      
        </div>
    </div>
    
  </div>
</nav>
    )
}