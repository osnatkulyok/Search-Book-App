"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_router_dom_1 = require("react-router-dom");
require("./Navbar.css");
const hi_1 = require("react-icons/hi");
const logo_jpg_1 = __importDefault(require("../../images/logo.jpg"));
function Navbar() {
    // Using the state hook to keep track of the Navbar's menu toggle
    const [toggleMenu, setToggleMenu] = (0, react_2.useState)(false);
    // Function to handle the Navbar menu toggle
    const handleNavbar = () => setToggleMenu(!toggleMenu);
    return (react_1.default.createElement("nav", { className: "navbar", id: "navbar" },
        react_1.default.createElement("div", { className: "container navbar-content flex" },
            react_1.default.createElement("div", { className: "brand-and-toggler flex flex-sb" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "navbar-brand flex" },
                    react_1.default.createElement("img", { src: logo_jpg_1.default, alt: "site logo" })),
                react_1.default.createElement("button", { type: 'button', className: "navbar-toggle-btn", onClick: handleNavbar },
                    react_1.default.createElement(hi_1.HiOutlineMenuAlt3, { size: 35, style: { color: `${toggleMenu ? '#fff' : '#010101'}` } })),
                react_1.default.createElement("span", { className: "text-uppercae fw-7 fs-24 ls-1" }, "bookhub")),
            react_1.default.createElement("div", { className: toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse" },
                react_1.default.createElement("ul", { className: "navbar-nav" },
                    react_1.default.createElement("li", { className: "nav-item" },
                        react_1.default.createElement(react_router_dom_1.Link, { to: "book", className: "nav-link text-uppercase text-white fs-22 fw-6 ls-1" }, "Home")),
                    react_1.default.createElement("li", { className: "nav-item" },
                        react_1.default.createElement(react_router_dom_1.Link, { to: "book", className: "nav-link text-uppercase text-white fs-22 fw-6 ls-1" }, "About")))))));
}
exports.default = Navbar;
