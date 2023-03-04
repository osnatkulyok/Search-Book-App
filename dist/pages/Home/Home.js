"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = require("../../components/Header/Header");
const react_router_dom_1 = require("react-router-dom");
function Home() {
    return (react_1.default.createElement("main", null,
        react_1.default.createElement(Header_1.Header, null),
        react_1.default.createElement(react_router_dom_1.Outlet, null)));
}
exports.default = Home;
