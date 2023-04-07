"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const context_1 = require("../../context");
const Book_1 = __importDefault(require("../BookList/Book"));
require("./WishList.css");
function WishList() {
    const { wishlist, removeFromWishlist } = (0, context_1.useGlobalContext)();
    console.log('wishlist:', wishlist);
    const [showFavorites] = (0, react_2.useState)(false);
    const filteredList = showFavorites
        ? wishlist.filter((item) => item.isFavorite)
        : wishlist;
    return (react_1.default.createElement("div", { className: "booklist" },
        react_1.default.createElement("h2", null, "Wishlist"),
        react_1.default.createElement("div", { className: "booklist-content" }, filteredList.length > 0 ? (filteredList.map((item, index) => {
            const bookProps = {
                id: item.id,
                cover_img: item.cover_img,
                title: item.title,
                author: item.author_name,
                edition_count: item.edition_count,
                first_publish_year: item.first_publish_year,
                onAddToWishlist: () => removeFromWishlist(item.id),
                isFavorite: true,
                isWishlist: true,
            };
            return (react_1.default.createElement("div", { key: `${item.id}-${index}` },
                react_1.default.createElement(Book_1.default, Object.assign({}, bookProps))));
        })) : (react_1.default.createElement("p", null, "No items in the wishlist")))));
}
exports.default = WishList;
