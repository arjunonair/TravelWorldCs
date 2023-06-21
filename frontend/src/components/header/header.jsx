import React from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo3.png";
import "./header.css";
import { useRef, useEffect, useContext } from "react";
import { authContext } from "../../context/authContext";
import useFetch from '../../hooks/useFetch'
import {BASE_URL} from '../../utils/config'

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },

  {
    path: "/customize",
    display: "Custom",
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

  const {data:users} = useFetch(`${BASE_URL}/users`)
  let id = ""
  users?.map((users) => id = users._id)

  let isAdmin=''
  if(user&&user._id!==null){
    if(user._id===id){
      isAdmin='admin'
    }
  }


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
                    <Button className="btn_reg" onClick = {logout}>
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
                {isAdmin && (<Button className="btn_reg ">
                      <Link to="/admin">Admin panel</Link>
                    </Button>)
                }
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
