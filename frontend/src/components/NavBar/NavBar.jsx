import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>React/Flask JWT</b>
          </Link>
        </li>
        <li>
        <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            <b>About Me</b>
          </Link>
        </li>
        <li>
        <Link to="/churches" style={{ textDecoration: "none", color: "white" }}>
            <b>churches</b>
          </Link>
        </li>
        <li>
        <Link to="/splides" style={{ textDecoration: "none", color: "white" }}>
            <b>Splides</b>
          </Link>
        </li>
        <li>
        <Link to="/gallery" style={{ textDecoration: "none", color: "white" }}>
            <b>gallery</b>
          </Link>
        </li>
        <li>
        <Link to="/core" style={{ textDecoration: "none", color: "white" }}>
            <b>Core Values</b>
          </Link>
        </li>
        <li>
        <Link to="/career" style={{ textDecoration: "none", color: "white" }}>
            <b>Career Page</b>
          </Link>
        </li>



        
        
    
       

      </ul>
    </div>
  );
};

export default Navbar;
