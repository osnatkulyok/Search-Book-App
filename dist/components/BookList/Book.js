"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./BookList.css");
const context_1 = require("../../context");
function Book({ id, cover_img, title, author, edition_count, first_publish_year, onAddToWishlist, isFavorite }) {
    const { removeFromWishlist } = (0, context_1.useGlobalContext)();
    function handleWishlistButton() {
        const bookToAdd = {
            id,
            title,
            author,
            cover_img,
            edition_count,
            first_publish_year,
            key: id,
            author_name: author,
            cover_id: 0,
            isFavorite: isFavorite,
        };
        if (isFavorite) {
            removeFromWishlist(id);
        }
        else {
            onAddToWishlist(bookToAdd);
        }
    }
    const handleClick = () => {
        console.log('clicked');
    };
    return (react_1.default.createElement("div", { className: "book-item flex flex-column flex-sb" },
        react_1.default.createElement("div", { className: "book-item-info text-center" },
            react_1.default.createElement("div", { className: "book-item-info-item" },
                react_1.default.createElement(react_router_dom_1.Link, { to: `/book/${id}`, className: "book-details-button" },
                    react_1.default.createElement("img", { src: cover_img, alt: "cover", onClick: handleClick }))),
            react_1.default.createElement("div", { className: "book-item-info-item title fw-7 fs-18" },
                react_1.default.createElement(react_router_dom_1.Link, { to: `/book/${id}`, onClick: handleClick },
                    react_1.default.createElement("span", null, title))),
            react_1.default.createElement("div", { className: "book-item-info-item author fs-15" },
                react_1.default.createElement("span", { className: "text-capitalize fw-7" }, "Author: "),
                react_1.default.createElement("span", null, author.join(', '))),
            react_1.default.createElement("div", { className: "book-item-info-item edition-count fs-15" },
                react_1.default.createElement("span", { className: "text-capitalize fw-7" }, "Total Editions: "),
                react_1.default.createElement("span", null, edition_count)),
            react_1.default.createElement("div", { className: "book-item-info-item publish_year fs-15" },
                react_1.default.createElement("span", { className: "text-capitalize fw-7" }, "First Publish Year: "),
                react_1.default.createElement("span", null, first_publish_year)),
            react_1.default.createElement("div", { className: "book-item-info-item wishlist-btn" },
                react_1.default.createElement("button", { className: "btn btn-wishlist", onClick: handleWishlistButton },
                    react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "25", height: "25", fill: "currentColor", className: "bi bi-bookmark-heart", viewBox: "0 0 16 16" },
                        react_1.default.createElement("path", { fillRule: "evenodd", d: "M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" }),
                        react_1.default.createElement("path", { d: "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" })))))));
}
exports.default = Book;
