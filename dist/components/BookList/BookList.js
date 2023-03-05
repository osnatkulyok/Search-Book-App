"use strict";
// import React from 'react'
// import { useGlobalContext } from 'src/context'
// import Book from './Book'
// import Loading from '../Loader/Loader'
// import cover_not_found from '../../images/cover_not_found.jpg'
// import './BookList.css'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// function BookList(): JSX.Element {
//     const { books, loading, resultTitle } = useGlobalContext()
//     const booksWithCovers = books.map((singleBook) => {
//         return {
//             ...singleBook,
//             // removing /works/ to get only id
//             id: (singleBook.id).replace("/works/", ""),
//             cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : cover_not_found
//         }
//     })
//     if (loading) return <Loading />
//     return (
//         <section className="booklist">
//             <div className="container">
//                 <div className="section-title">
//                     <h2>{resultTitle}</h2>
//                 </div>
//                 <div className="booklist-content grid">
//                     {booksWithCovers.slice(0, 30).map((item, index) => {
//                         return (
//                             <Book key={index} {...item} />
//                         )
//                     })}
//                 </div>
//             </div>
//         </section>
//     )
// }
// export default BookList
const react_1 = __importDefault(require("react"));
const context_1 = require("src/context");
const Book_1 = __importDefault(require("./Book"));
const Loader_1 = __importDefault(require("../Loader/Loader"));
const cover_not_found_jpg_1 = __importDefault(require("../../images/cover_not_found.jpg"));
require("./BookList.css");
function BookList() {
    // Get books, loading, and resultTitle from the global context
    const { books, loading, resultTitle } = (0, context_1.useGlobalContext)();
    // Map each book to a new object that includes an ID and cover image URL
    const booksWithCovers = books.map((singleBook) => {
        return Object.assign(Object.assign({}, singleBook), { 
            // Remove the "/works/" prefix from the book ID to create a valid URL parameter
            id: (singleBook.id).replace("/works/", ""), 
            // Use the Open Library Covers API to get the cover image URL
            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : cover_not_found_jpg_1.default, author: Array.isArray(singleBook.author) ? singleBook.author : [singleBook.author] });
    });
    // Show a loading spinner if books are still being fetched
    if (loading)
        return react_1.default.createElement(Loader_1.default, null);
    return (react_1.default.createElement("section", { className: "booklist" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("div", { className: "section-title" },
                react_1.default.createElement("h2", null, resultTitle)),
            react_1.default.createElement("div", { className: "booklist-content grid" }, booksWithCovers.slice(0, 30).map((item, index) => {
                return (react_1.default.createElement(Book_1.default, Object.assign({ key: index }, item)));
            })))));
}
exports.default = BookList;
