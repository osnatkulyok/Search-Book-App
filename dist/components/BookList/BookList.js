"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const context_1 = require("src/context"); // Import the global context hook
const Book_1 = __importDefault(require("./Book"));
const Loader_1 = __importDefault(require("../Loader/Loader"));
const cover_not_found_jpg_1 = __importDefault(require("../../images/cover_not_found.jpg"));
require("./BookList.css");
function BookList() {
    // Destructure the properties from the global context
    const { books, loading, resultTitle, addToWishlist, wishlist } = (0, context_1.useGlobalContext)();
    console.log('books', books);
    // Log the numbers extracted from the book ids to the console
    console.log("id array", books.map((book) => book.id.replace(/^\/works\/OL/, '')));
    // Log the wishlist to the console
    console.log('wishlist', wishlist);
    const booksWithCovers = books.map((singleBook) => {
        const cover_id = singleBook.cover_id;
        console.log("cover", cover_id);
        const cover_img = cover_id ? `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg` : cover_not_found_jpg_1.default;
        return {
            id: singleBook.id ? singleBook.id.replace('/works/', '') : '',
            cover_img,
            title: singleBook.title || '',
            author: singleBook.author_name || [],
            edition_count: singleBook.edition_count || '',
            first_publish_year: singleBook.first_publish_year || '',
            onAddToWishlist: addToWishlist,
            isFavorite: false,
        };
    });
    // console.log("id array after map", booksWithCovers.map((book) => book.cover_id));
    // Render a loading indicator if the books are still loading
    if (loading)
        return react_1.default.createElement(Loader_1.default, null);
    // Filter the books based on whether to show only favorites or all books
    const booksToDisplay = booksWithCovers;
    return (react_1.default.createElement("section", { className: "booklist" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("div", { className: "section-title" },
                react_1.default.createElement("h2", null, resultTitle)),
            react_1.default.createElement("div", { className: "booklist-content grid" }, booksToDisplay.slice(0, 30).map((item, index) => {
                return react_1.default.createElement(Book_1.default, Object.assign({ key: index }, item));
            })))));
}
exports.default = BookList;
