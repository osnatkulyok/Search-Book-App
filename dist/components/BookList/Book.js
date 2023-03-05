"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./BookList.css");
function Book(book) {
    // Render the book item using the props passed to the component
    return (react_1.default.createElement("div", { className: "book-item flex flex-column flex-sb" },
        react_1.default.createElement("div", { className: "book-item-img" },
            react_1.default.createElement("img", { src: book.cover_img, alt: "cover" })),
        react_1.default.createElement("div", { className: "book-item-info text-center" },
            react_1.default.createElement(react_router_dom_1.Link, Object.assign({ to: `/book/${book.id}` }, book),
                react_1.default.createElement("div", { className: "book-item-info-item title fw-7 fs-18" },
                    react_1.default.createElement("span", null, book.title))),
            react_1.default.createElement("div", { className: "book-item-info-item author fs-15" },
                react_1.default.createElement("span", { className: 'text-capitalize fw-7' }, "Author: "),
                react_1.default.createElement("span", null, book.author.join(", "))),
            react_1.default.createElement("div", { className: "book-item-info-item edition-count fs-15" },
                react_1.default.createElement("span", { className: 'text-capitalize fw-7' }, "Total Editions: "),
                react_1.default.createElement("span", null, book.edition_count)),
            react_1.default.createElement("div", { className: "book-item-info-item publish_year fs-15" },
                react_1.default.createElement("span", { className: 'text-capitalize fw-7' }, "First Publish Year:  "),
                react_1.default.createElement("span", null, book.first_publish_year)))));
}
exports.default = Book;
