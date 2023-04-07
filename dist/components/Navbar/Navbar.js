"use strict";
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import { HiOutlineMenuAlt3 } from 'react-icons/hi';
// import logo from '../../images/logo.jpg';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./Navbar.css");
const hi_1 = require("react-icons/hi");
const logo_jpg_1 = __importDefault(require("../../images/logo.jpg"));
const HoverText_1 = __importDefault(require("./HoverText"));
function Navbar({ isLoggedIn, user }) {
    const [toggleMenu, setToggleMenu] = (0, react_1.useState)(false);
    const [hovered, setHovered] = (0, react_1.useState)(false);
    const handleNavbar = () => setToggleMenu(!toggleMenu);
    const handleLinkClick = () => {
        setToggleMenu(false);
    };
    const handleMouseEnter = () => {
        setHovered(true);
    };
    const handleMouseLeave = () => {
        setHovered(false);
    };
    return (react_1.default.createElement("nav", { className: "navbar", id: "navbar" },
        react_1.default.createElement("div", { className: "container navbar-content flex" },
            react_1.default.createElement("div", { className: "brand-and-toggler flex flex-sb" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "navbar-brand flex", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
                    react_1.default.createElement("img", { src: logo_jpg_1.default, alt: "site logo" }),
                    react_1.default.createElement("span", { className: "text-uppercase fw-7 fs-24 ls-1" }, "bookhub"),
                    hovered && (react_1.default.createElement(HoverText_1.default, { text: "Go back to Home page" }))),
                react_1.default.createElement("div", { className: "navbar-welcome" }, isLoggedIn && (react_1.default.createElement("span", { className: "text-uppercase fw-7 fs-16 ls-1" },
                    "Hi ",
                    user))),
                react_1.default.createElement("button", { type: "button", className: "navbar-toggler-btn", onClick: handleNavbar },
                    react_1.default.createElement(hi_1.HiOutlineMenuAlt3, { size: 35, style: {
                            color: `${toggleMenu ? '#fff' : '#010101'}`,
                        } }))),
            react_1.default.createElement("div", { className: toggleMenu
                    ? 'navbar-collapse show-navbar-collapse'
                    : 'navbar-collapse' },
                react_1.default.createElement("ul", { className: "navbar-nav" },
                    react_1.default.createElement("li", { className: "nav-item" },
                        react_1.default.createElement(react_router_dom_1.Link, { to: "book", className: "nav-link text-uppercase text-white fs-22 fw-6 ls-1", onClick: handleLinkClick }, "Home")),
                    react_1.default.createElement("li", { className: "nav-item" },
                        react_1.default.createElement(react_router_dom_1.Link, { to: "about", className: "nav-link text-uppercase text-white fs-22 fw-6 ls-1", onClick: handleLinkClick }, "About")),
                    react_1.default.createElement("li", { className: "nav-item" },
                        react_1.default.createElement(react_router_dom_1.Link, { to: "wishlist", className: "nav-link text-uppercase text-white fs-22 fw-6 ls-1", onClick: handleLinkClick }, "My Favorites")))))));
}
exports.default = Navbar;
