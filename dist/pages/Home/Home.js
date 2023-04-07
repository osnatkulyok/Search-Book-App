"use strict";
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
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Navbar_1 = __importDefault(require("src/components/Navbar/Navbar"));
const LogIn_1 = __importDefault(require("src/components/LogIn/LogIn"));
const Header_1 = require("src/components/Header/Header");
function Home() {
    const [isLoggedIn, setIsLoggedIn] = (0, react_1.useState)(false);
    const [username, setUsername] = (0, react_1.useState)('');
    const location = (0, react_router_dom_1.useLocation)();
    const handleLogin = (username) => {
        setUsername(username);
        setIsLoggedIn(true);
    };
    return (react_1.default.createElement("main", null,
        react_1.default.createElement(Navbar_1.default, { isLoggedIn: isLoggedIn, user: username }),
        isLoggedIn && (location.pathname.includes("/book/") || location.pathname === "/wishlist" || location.pathname === "/about") ? null : (isLoggedIn ? react_1.default.createElement(Header_1.Header, null) : react_1.default.createElement(LogIn_1.default, { onLogin: handleLogin })),
        isLoggedIn && react_1.default.createElement(react_router_dom_1.Outlet, null)));
}
exports.default = Home;
