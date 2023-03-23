// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import { HiOutlineMenuAlt3 } from 'react-icons/hi';
// import logo from '../../images/logo.jpg';

// interface NavbarProps {
//     isLoggedIn: boolean;
//     user: string;
// }

// function Navbar({ isLoggedIn, user }: NavbarProps): JSX.Element {
//     const [toggleMenu, setToggleMenu] = useState<boolean>(false);

//     const handleNavbar = (): void => setToggleMenu(!toggleMenu);

//     const handleLinkClick = (): void => {
//         setToggleMenu(false);
//     };

//     return (
//         <nav className="navbar" id="navbar">
//             <div className="container navbar-content flex">
//                 <div className="brand-and-toggler flex flex-sb">
//                     <Link to="/" className="navbar-brand flex">
//                         <img src={logo} alt="site logo" />
//                         <span className="text-uppercase fw-7 fs-24 ls-1">bookhub</span>
//                     </Link>
//                     <div className="navbar-welcome">
//                         {isLoggedIn && (
//                             <span className="text-uppercase fw-7 fs-16 ls-1">Hi {user}</span>
//                         )}
//                     </div>
//                     <button
//                         type="button"
//                         className="navbar-toggler-btn"
//                         onClick={handleNavbar}
//                     >
//                         <HiOutlineMenuAlt3
//                             size={35}
//                             style={{
//                                 color: `${toggleMenu ? '#fff' : '#010101'}`,
//                             }}
//                         />
//                     </button>
//                 </div>

//                 <div
//                     className={
//                         toggleMenu
//                             ? 'navbar-collapse show-navbar-collapse'
//                             : 'navbar-collapse'
//                     }
//                 >
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <Link
//                                 to="book"
//                                 className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
//                                 onClick={handleLinkClick}
//                             >
//                                 Home
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link
//                                 to="about"
//                                 className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
//                                 onClick={handleLinkClick}
//                             >
//                                 About
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link
//                                 to="wishlist"
//                                 className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
//                                 onClick={handleLinkClick}
//                             >
//                                 My Favorites
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;
// ////////////////////////////////
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import logo from '../../images/logo.jpg';
import HoverText from './HoverText';

interface NavbarProps {
    isLoggedIn: boolean;
    user: string;
}

function Navbar({ isLoggedIn, user }: NavbarProps): JSX.Element {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const [hovered, setHovered] = useState<boolean>(false);

    const handleNavbar = (): void => setToggleMenu(!toggleMenu);

    const handleLinkClick = (): void => {
        setToggleMenu(false);
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <nav className="navbar" id="navbar">
            <div className="container navbar-content flex">
                <div className="brand-and-toggler flex flex-sb">
                    <Link to="/" className="navbar-brand flex" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img src={logo} alt="site logo" />
                        <span className="text-uppercase fw-7 fs-24 ls-1">bookhub</span>
                        {hovered && (
                            <HoverText text="Go back to Home page" />
                        )}
                    </Link>
                    <div className="navbar-welcome">
                        {isLoggedIn && (
                            <span className="text-uppercase fw-7 fs-16 ls-1">Hi {user}</span>
                        )}
                    </div>
                    <button
                        type="button"
                        className="navbar-toggler-btn"
                        onClick={handleNavbar}
                    >
                        <HiOutlineMenuAlt3
                            size={35}
                            style={{
                                color: `${toggleMenu ? '#fff' : '#010101'}`,
                            }}
                        />
                    </button>
                </div>

                <div
                    className={
                        toggleMenu
                            ? 'navbar-collapse show-navbar-collapse'
                            : 'navbar-collapse'
                    }
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                to="book"
                                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
                                onClick={handleLinkClick}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="about"
                                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
                                onClick={handleLinkClick}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="wishlist"
                                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
                                onClick={handleLinkClick}
                            >
                                My Favorites
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
