"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./About.css");
const about_img_jpg_1 = __importDefault(require("../../images/about-img.jpg"));
function About() {
    return (react_1.default.createElement("section", { className: "about" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("div", { className: "section-title" },
                react_1.default.createElement("h2", null, "About")),
            react_1.default.createElement("div", { className: "about-content grid" },
                react_1.default.createElement("div", { className: "about-img" },
                    react_1.default.createElement("img", { src: about_img_jpg_1.default, alt: "about img" })),
                react_1.default.createElement("div", { className: "about-text" },
                    react_1.default.createElement("h2", { className: "about-title fs-26 ls-1" }, "About BookHub"),
                    react_1.default.createElement("p", { className: "fs-17" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos consequuntur vero commodi provident maiores, iusto atque corrupti voluptate vel sequi consectetur unde aliquam corporis saepe animi non, tempora reiciendis molestias sed laudantium dolores. Assumenda aperiam fuga quo voluptate commodi ullam aliquam expedita voluptas delectus "),
                    react_1.default.createElement("p", { className: 'fs-17' }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta, possimus inventore eveniet atque voluptatibus repellendus aspernatur illo aliquam dignissimos illum. Commodi, porro omnis dolore amet neque modi quas eum!"))))));
}
exports.default = About;
