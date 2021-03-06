import { Link } from 'react-router-dom';
import icon from '../../../images/icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, photo,email } = loggedInUser;

    var link = {
        color: "white",
        textDecoration: "none",
        fontWeight: "600"
    }
    var link2 = {
        color: "black",
        textDecoration: "none",
        fontWeight: "600"
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link className="navbar-brand text-light ps-5  fw-bold fs-4" href="#"> <img style={{ width: '50px', paddingRight: "3px" }} src={icon} alt="" />illusion<br />photography</Link>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link me-5 active text-light fw-bold fs-6" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 text-light fw-bold fs-6" href="#about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 text-light fw-bold fs-6" href="#service">Services</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5 text-light fw-bold fs-6" to="/order">Orders</Link>
                        </li>
                        
                        {
                            (email =="rahatminhaj555@gmail.com" || email == "test@test.com")&&<li class="nav-item dropdown">
                            <Link style={link} className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Admin
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link style={link2} className="dropdown-item" to="/addService"><FontAwesomeIcon icon={faPlus} />Add Service</Link></li>
                                <li><Link style={link2} className="dropdown-item" to="/manageService"><FontAwesomeIcon icon={faTasks} /> Manage Service</Link></li>
                                <li><Link style={link2} className="dropdown-item" to="/manageOrder"><FontAwesomeIcon icon={faTasks} /> Manage Order</Link></li>
                            </ul>
                        </li>
                        }
                        <li className="nav-item ">
                            <a className="nav-link me-5 text-light fw-bold fs-6" href="#contact">Contact Us</a>
                        </li>
                        <li className="nav-item  pe-3 ">
                            <a href='/login'><button className="btn btn-secondary fw-bold">{name?.length > 0 ? 'Log Out' : 'Log In'}</button></a>
                        </li>
                        <li className="nav-item ">

                            <Link to="#">{name?.length > 0 ? <button className="btn btn-secondary fw-bold"><img style={{ width: "30px", borderRadius: "50%" }} src={photo} alt="" /> {name}</button> : null}</Link>
                        </li>

                    </ul>

                </div>
            </div>
            <button className="btn btn-brand fw-bold fixed-bottom me-auto mb-5" ><a href="#home"><FontAwesomeIcon style={{ color: 'white', width: '20px', fontSize: '20px' }} icon={faAngleUp} /></a></button>
        </nav>
    );
};

export default Navbar;