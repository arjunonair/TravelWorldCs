import React from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo3.png";
import "./header.css";
import { useRef, useEffect, useContext } from "react";
import { authContext } from "../../context/authContext";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },

  {
    path: "/about",
    display: "About",
  },

  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();

  const {user, dispatch} = useContext(authContext);
  const logout = () => {
    dispatch({type: 'LOGOUT'})
    navigate("/")
  };

  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      headerRef.current.classList.add("sticky__header");
    });
  };

  useEffect(() => {
    stickyHeader();
    return window.removeEventListener("scroll", stickyHeader);
  });

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div
            className="nav__wrapper d-flex align-items-center
        justify-content-evenly"
          >
            <div className="logo">
              <Link to={"/"}>
                <img className="photo" src={logo} alt="" />
              </Link>
            </div>

            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5 ">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/*====nav=====*/}

            <div className="nav__right d-flex align-items-center gap-4 ">
              <div className="nav__btns d-flex align-items-center gap-4 ">

                {
                  user ? (
                  <>
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick = {logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      color="secondary"
                      outline
                      className="btn secondary__btn"
                    >
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn_reg ">
                      <Link to="/register">Register</Link>
                    </Button>
                    </>
                )}
              </div>
              {/* menu end */}
              <span class="Mobile_menu">
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
