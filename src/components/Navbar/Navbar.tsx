import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import logo from '../../images/logo.jpg'

interface NavbarProps {
    isLoggedIn: boolean;
    user: string;
}

function Navbar(props: NavbarProps): JSX.Element {
    // Using the state hook to keep track of the Navbar's menu toggle
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    // Function to handle the Navbar menu toggle
    const handleNavbar = (): void => setToggleMenu(!toggleMenu)

    return (
        <nav className="navbar" id="navbar">
            <div className="container navbar-content flex">
                <div className="brand-and-toggler flex flex-sb">
                    <Link to="/" className="navbar-brand flex">
                        <img src={logo} alt="site logo" />
                        <span className="text-uppercase fw-7 fs-24 ls-1">bookhub</span>
                    </Link>
                    <button type='button' className="navbar-toggler-btn" onClick={handleNavbar}>
                        {/* TODO convert to scss */}
                        <HiOutlineMenuAlt3
                            size={35}
                            style={{
                                color: `${toggleMenu ? '#fff' : '#010101'}`
                            }} />
                    </button>
                </div>


                <div className={
                    toggleMenu
                        ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="book"
                                target={'_blank'}
                                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" target={'_blank'} className="nav-link text-uppercase text-white fs-22 fw-6 ls-1">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;
