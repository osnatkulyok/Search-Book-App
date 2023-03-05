"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const loader_jpg_1 = __importDefault(require("../../images/loader.jpg"));
require("./Loader.css");
function Loader() {
    return (react_1.default.createElement("div", { className: "loader flex flex-c" },
        react_1.default.createElement("img", { src: loader_jpg_1.default, alt: "loader" })));
}
exports.default = Loader;
