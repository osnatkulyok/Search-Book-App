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
const monkey_jpg_1 = __importDefault(require("../../images/monkey.jpg"));
require("./LogIn.css");
function Login(props) {
    const [username, setUsername] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    // Function to handle sign in
    const handleSignIn = () => {
        const isValidUsername = typeof username === 'string' && isNaN(Number(username));
        const isValidPassword = /^\d+$/.test(password);
        if (!isValidUsername || !isValidPassword) {
            alert('Invalid username or password! \n keep username string only and password munber only. ');
        }
        else {
            // TODO: Check if the user exists and if the password is correct
            // Call the onLogin function passed in as a prop if successful
            props.onLogin(username);
        }
    };
    // Function to handle username input changes
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    // Function to handle password input changes
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    return (react_1.default.createElement("div", { className: "login-container" },
        react_1.default.createElement("h2", null, "Welcome to BookHub"),
        react_1.default.createElement("div", { className: "monkey-pic" },
            react_1.default.createElement("img", { src: monkey_jpg_1.default, alt: "monkey-pic" })),
        react_1.default.createElement("div", { className: "login-body" },
            react_1.default.createElement("h3", null, "Get started with a free account "),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("label", { className: 'label', htmlFor: "username" }, "Username:"),
                react_1.default.createElement("input", { type: "text", id: "username", value: username, onChange: handleUsernameChange, className: "form-control" })),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("label", { htmlFor: "password" }, "Password:"),
                react_1.default.createElement("input", { type: "password", id: "password", value: password, onChange: handlePasswordChange, className: "form-control" })),
            react_1.default.createElement("button", { type: "button", className: "btn btn-primary", onClick: handleSignIn }, "Sign In"),
            react_1.default.createElement("div", { className: "register-link" },
                react_1.default.createElement("p", null,
                    "Not a member yet?",
                    ' ',
                    react_1.default.createElement(react_router_dom_1.Link, { to: "register", target: '_blank' }, "Register"))))));
}
exports.default = Login;
