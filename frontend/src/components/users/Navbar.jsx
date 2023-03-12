import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { createPortal } from "react-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Register from "../Register";
import Login from "../Login";
import { logout } from "../../store/reducers/authReducer";
import { useFetchAllThemesQuery } from "../../store/services/themeService";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: "80%",
    width: "80%",
    bgcolor: 'background.paper',
    boxShadow: 24,
};

const style1 = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: "50%",
    width: "80%",
    bgcolor: 'background.paper',
    boxShadow: 24,
};

const Navbar = () => {

    const { data, isFetching } = useFetchAllThemesQuery();
    console.log(data);

    const [open, setOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        setLoginOpen(false);
    }
    const handleLoginOpen = () => {
        setLoginOpen(true);
        setOpen(false)
    }
    const handleLoginClose = () => setLoginOpen(false);
    const handleClose = () => setOpen(false);

    const [openRegister, setOpenRegister] = useState(false);
    const { userToken, user } = useSelector((state) => state.authReducer);

    let token;
    const dispatch = useDispatch();


    useEffect(() => {
        if (localStorage.getItem("token")) {
            token = localStorage.getItem("token");
        } else {
            token = "";
        }
    }, [localStorage.getItem("token")]);

    const [navbarOpen, setNavbarOpen] = useState(false);

    const adminLogout = () => {
        toast.success("Logged Out Successfully", {
            style: {
                backgroundColor: "#393a3b",
                color: "white",
                padding: "8px",
            },
        });
        dispatch(logout("login-token"));
    }

    return (
        <div className="mainNavbar">
            <Nav>
                {/* <Toaster
                    toastOptions={{ style: { fontSize: "1.5rem" } }}
                    position="top-center"
                    reverseOrder={true}
                /> */}
                <div className="left">
                    <div className="logo">PACK&GO</div>
                </div>
                <div className="right">
                    <div className="links">
                        <ul>
                            <Link to="/">
                                <li>
                                    <a href="#">HOME</a>
                                </li>
                            </Link>
                            <Link to="/theme">
                                <li id="theme" className="bounce">
                                    <a href="#">THEMES</a>
                                    <div className="theme_big">
                                        <ul>
                                            {data?.map((theme, index) => {
                                                return (
                                                    <Link to={`/theme/${theme._id}`} style={{ margin: "0", padding: "0" }}>
                                                        <li>
                                                            <a href="#">{theme.name}</a>
                                                        </li>
                                                    </Link>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/contactus">
                                <li>
                                    <a href="#">CONTACT US</a>
                                </li>
                            </Link>
                            <Link to="/aboutus">
                                <li>
                                    <a href="#">ABOUT US</a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    {userToken ? (
                        <div className="buttons"><button onClick={adminLogout}>LOGOUT</button></div>
                    ) : (
                        <div className="buttons">
                            <button onClick={handleOpen}>
                                REGISTER
                            </button>
                            <button onClick={handleLoginOpen}>
                                LOGIN
                            </button>
                        </div>
                    )}
                </div>
                <div className="menu">
                    {!navbarOpen ? (
                        <MenuRoundedIcon
                            className="icon"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        />
                    ) : (
                        <CancelOutlinedIcon
                            className="icon"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        />
                    )}
                </div>
                {navbarOpen && (
                    <div className="listMenu">
                        <ul>
                            <li>
                                <a href="#">HOME</a>
                            </li>
                            <li id="theme">
                                <a href="#">THEME</a>
                            </li>
                            <div className="hide">
                                <ul>
                                    <li>
                                        <a href="#">Top Packages</a>
                                    </li>
                                    <li>
                                        <a href="#">Top Packages</a>
                                    </li>
                                    <li>
                                        <a href="#">Top Packages</a>
                                    </li>
                                    <li>
                                        <a href="#">Top Packages</a>
                                    </li>
                                </ul>
                            </div>
                            <li>
                                <a href="#">CONTACT US</a>
                            </li>
                            <li>
                                <a href="#">ABOUT US</a>
                            </li>
                            <li onClick={() => setOpenRegister(!openRegister)}>
                                <a href="#">REGISTER</a>
                            </li>
                            <li onClick={() => setOpenLogin(!openLogin)}>
                                <a href="#">LOGIN</a>
                            </li>
                        </ul>
                    </div>
                )}
                {/* <Register
                    openRegister={openRegister}
                    setOpenRegister={() => setOpenRegister(!openRegister)}
                    setOpenLogin={() => setOpenLogin(true)}
                />
                <Login
                    openLogin={openLogin}
                    setOpenLogin={() => setOpenLogin(!openLogin)}
                /> */}
            </Nav>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style} style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Register open={open} setOpen={setOpen} />
                    </Box>
                </Fade>
            </Modal>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={loginOpen}
                onClose={handleLoginClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={loginOpen}>
                    <Box sx={style1} style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Toaster
                            toastOptions={{ style: { fontSize: "1.5rem" } }}
                            position="top-center"
                            reverseOrder={true}
                        />
                        <Login loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default Navbar;


const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    top: -100%;
  }
  to {
    top: 0;
  }
`;

const Nav = styled.nav`
  height: 10vh;
  width: 100%;
  background-color: var(--bgDarkBlue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .listMenu {
    position: absolute;
    height: max-content;
    width: 25rem;
    background-color: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.35) 5px 5px 15px;
    top: 10vh;
    right: 0;
    z-index: 999999999;
    ul {
      display: flex;
      height: 100%;
      flex-direction: column;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      gap: 2rem;
      z-index: 999999999;
      padding: 2rem 0;
      .hide {
        display: none;
        z-index: 999999999;
        background-color: white;
        border-radius: 3rem;
        padding: 2rem 0;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        transform-origin: bottom;
      }
      .bounce:hover {
            animation-name: bounce;
            animation-timing-function: ease;
        }
      #theme:hover + .theme_big,
      .hide:hover {
        display: block;
        position: absolute;
        top: 9.1rem;
        right: 25rem;
        box-shadow: rgba(0, 0, 0, 0.35) 5px 5px 15px;
        z-index: 999999999;
        ul {
          display: flex;
          height: 20rem;
          flex-direction: column;
          width: 30rem;
          align-items: center;
          justify-content: flex-start;
          gap: 1rem;
          z-index: 999999999;
          padding: 0 2rem;
          li:hover a {
            color: white;
          }
          li {
            list-style-type: none;
            height: 4.5rem;
            width: 100%;
            display: flex;
            align-items: center;
            z-index: 999999999;
            cursor: pointer;
            justify-content: center;
            &:hover {
              color: white;
              background-color: #393a3b;
            }
            a {
              text-decoration: none;
              z-index: 999999999;
              font-size: 2rem;
              color: #393a3b;
            }
          }
        }
      }
      li {
        list-style-type: none;
        height: 5rem;
        width: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        z-index: 999999999;
        justify-content: center;
        &:hover {
          color: white;
          background-color: #393a3b;
        }
        a {
          text-decoration: none;
          z-index: 999999999;
          font-size: 2rem;
          color: #393a3b;
        }
      }
      li:hover a {
        color: white;
      }
    }
  }
  .left {
    margin-left: var(--r3-5);
    .logo {
      font-size: var(--r3);
      font-weight: 600;
      color: var(--bgLightSkin);
      padding: var(--r-75) var(--r2);
      letter-spacing: .15rem;
      &:hover {
        background-color: var(--bgWhite);
        color: var(--bgDarkBlue);
        box-shadow: -2px -1px 30px -2px rgba(0,0,0,0.48);
        -webkit-box-shadow: -2px -1px 30px -2px rgba(0,0,0,0.48);
        -moz-box-shadow: -2px -1px 30px -2px rgba(0,0,0,0.48);
        transition: all 0.2s ease-out;
        cursor: pointer;
        border-radius: var(--r2);
      }
    }
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--r3);
    .links {
      display: flex;
      justify-content: center;
      align-items: center;
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--r2);
        #theme:hover .theme_big{
            display: block;
        }
        li {
          list-style-type: none;
          cursor: pointer;
          box-sizing: border-box;
          height: 100%;
          .theme_big {
            position: absolute;
            top: 10vh;
            display: none;
            z-index: 999999999;
            border-radius: var(--r3);
            padding: var(--r2) 0;
            height: 37vh;
            width: 28rem;
            background-color: var(--bgDarkBlue);
            ul{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                li{
                    width: 100%;
                    &:hover{
                        border-radius: var(--r2);
                        background-color: var(--bgYellow);
                    }
                    a{
                        width: 100%;
                        color: var(--bgWhite);
                        padding: var(--r1) var(--r5);
                    }
                }
            }
          }
          a {
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--bgWhite);
            height: 100%;
            padding: var(--r2-5) var(--r1-25);
            font-size: var(--r1-5);
            letter-spacing: .15rem;
            font-weight: 500;
            &:hover {
              color: var(--bgYellow);
            }
          }
        }
      }
    }
    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: var(--r3);
      margin-right: var(--r2);
      button {
        padding: var(--r1) var(--r2);
        font-size: var(--r1-5);
        font-weight: 600;
        color: var(--bgWhite);
        cursor: pointer;
        background-color: var(--bgYellow);
        border: none;
        border-radius: var(--r-75);
        &:hover {
          background-color: var(--bgWhite);
          color: var(--bgYellow);
          transition: all 0.3s ease-in-out;
        }
      }
    }
    .menu {
      display: none;
      animation: ${slideDown} 0.7s ease-in-out;
      .icon {
        color: #393a3b;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 200px) and (max-width: 875px) {
    width: 100%;
    .left {
      margin-left: 1rem;
      .logo {
        font-size: 3rem;
        font-weight: 600;
        color: #393a3b;
        padding: 1rem 2rem;
        &:hover {
          background-color: #393a3b;
          color: white;
          box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.8);
          transition: all 0.3s ease-in-out;
          cursor: pointer;
          border-radius: 2rem;
        }
      }
    }
    .right {
      display: none;
    }
    .menu {
      display: block;
      display: flex;
      justify-content: center;
      animation: ${slideDown} 0.7s ease-in-out;
      align-items: center;
      .icon {
        font-size: 3.5rem;
        margin-right: 1.5rem;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 875px) and (max-width: 1024px) {
    width: 100%;
    .left {
      margin-left: 5rem;
      .logo {
        font-size: 3.5rem;
      }
    }
    .right {
      margin-right: 5rem;
      .links {
        ul {
          margin-right: 3rem;
          li {
            padding: 0.5rem 1rem;
            a {
              font-size: 1.7rem;
              font-weight: 500;
            }
          }
        }
      }
      .buttons {
        gap: 3rem;
        button {
          padding: 0.7rem 1.5rem;
          font-size: 1.7rem;
        }
      }
    }
    .menu {
      display: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 100%;
    .left {
      margin-left: 5rem;
    }
    .right {
      margin-right: 5rem;
      .links {
        ul {
          margin-right: 3rem;
          li {
            padding: 0.5rem 1rem;
            a {
              font-size: 2rem;
            }
          }
        }
      }
      .buttons {
        gap: 3rem;
        button {
          padding: 0.7rem 1.5rem;
          font-size: 1.5rem;
        }
      }
    }
    .menu {
      display: none;
    }
  }

  @media (min-width: 1200px) {
    .menu {
      display: none;
    }
  }
`;


