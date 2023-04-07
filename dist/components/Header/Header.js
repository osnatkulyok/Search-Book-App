"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importDefault(require("react"));
const SearchForm_1 = __importDefault(require("../SearchForm/SearchForm"));
require("./Header.css");
function Header() {
    return (react_1.default.createElement("div", { className: 'holder' },
        react_1.default.createElement("header", { className: 'header' },
            react_1.default.createElement("div", { className: 'header-content flex flex-c text-center text-white' },
                react_1.default.createElement("h2", { className: 'header-title text-capitalize' }, "find your book of choice."),
                react_1.default.createElement("br", null),
                react_1.default.createElement("p", { className: 'header-text fs-18 fw-3' }, "A room without books is like a body without a soul"),
                react_1.default.createElement(SearchForm_1.default, null)))));
}
exports.Header = Header;
