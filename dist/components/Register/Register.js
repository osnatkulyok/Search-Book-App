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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function Register({ setUser }) {
    const [username, setUsername] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [error, setError] = (0, react_1.useState)('');
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            setError('Please enter a username and password');
        }
        else if (!/^[a-zA-Z]+$/.test(username)) {
            setError('Username must contain letters only');
        }
        else if (!/^[0-9]+$/.test(password)) {
            setError('Password must contain numbers only');
        }
        else {
            const user = { username, password };
            localStorage.setItem('user', JSON.stringify(user));
            setUser(user);
        }
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "Register"),
        react_1.default.createElement("form", { onSubmit: handleSubmit },
            react_1.default.createElement("label", null,
                "Username:",
                react_1.default.createElement("input", { type: "text", value: username, onChange: handleUsernameChange })),
            react_1.default.createElement("label", null,
                "Password:",
                react_1.default.createElement("input", { type: "password", value: password, onChange: handlePasswordChange })),
            error && react_1.default.createElement("p", null, error),
            react_1.default.createElement("button", { type: "submit" }, "Register"))));
}
exports.default = Register;
