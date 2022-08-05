import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logocw from "../assets/cw.jpeg";
import { DropdownButton, Dropdown } from "react-bootstrap";
// import { AuthContext } from '../contexts/AuthContext';
// import { useContext } from "react";
 
const Navbar = () => {
  const navigate = useNavigate();
  // const currentUser = { displayName: 'Talha' };
  const currentUser = false;

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={Logocw} alt="cwLogo" width="45px" />
          </Link>
          <h3 className="navbar-brand" onClick={() => navigate('/')}>SH*T BLOG</h3>
        
        <div className="d-flex text-white align-items-center ">
            {currentUser ? (
              <>
              <DropdownButton id="dropdown-item-button" title={currentUser.displayName}>
            <Dropdown.Item as="button" /*onClick={() => logOut()}*/>Profile</Dropdown.Item>
            <Dropdown.Item as="button" /*onClick={() => logOut()}*/>Logout</Dropdown.Item>
            </DropdownButton>
              </>
            ) : (
              <>
              <DropdownButton id="dropdown-item-button" title="Profile">
            <Dropdown.Item as="button" onClick={() => navigate('/login')}>Login</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => navigate('/register')}>Register</Dropdown.Item>
            </DropdownButton>
              </>
            )}
          </div>
          </div>
      </nav>
    </div>
  );
};
export default Navbar;
