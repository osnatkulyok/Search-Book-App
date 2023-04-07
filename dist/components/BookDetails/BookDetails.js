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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Loader_1 = __importDefault(require("../Loader/Loader"));
const cover_not_found_jpg_1 = __importDefault(require("../../images/cover_not_found.jpg"));
require("./BookDetails.css");
const fa_1 = require("react-icons/fa");
const Description_1 = __importDefault(require("./Description"));
// The base URL for fetching book details
const URL = 'https://openlibrary.org/works/';
function BookDetails() {
    var _a, _b, _c;
    // Get the book ID from the URL parameters
    // Define a type for the params object returned by useParams()
    const { id } = (0, react_router_dom_1.useParams)();
    // Define state variables to store the book details and loading state
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [book, setBook] = (0, react_1.useState)(null);
    // Define a navigate function to programmatically navigate to a new route
    const navigate = (0, react_router_dom_1.useNavigate)();
    // Use the useEffect hook to fetch the book details when the component mounts or the ID changes
    (0, react_1.useEffect)(() => {
        setLoading(true);
        function getBookDetails() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    // Make a request to the Open Library API to get the book details
                    const response = yield fetch(`${URL}${id}.json`);
                    const data = yield response.json();
                    if (data) {
                        // Extract the relevant book properties from the API response
                        const { description, title, covers, subject_places, subject_times, subjects, } = data;
                        console.log("covers", covers);
                        // Create a new book object with the extracted properties
                        const newBook = {
                            description: description ? description.value : 'No description found',
                            title: title,
                            cover_img: covers
                                ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
                                : cover_not_found_jpg_1.default,
                            subject_places: subject_places ? subject_places.join(', ') : 'No subject places found',
                            subject_times: subject_times ? subject_times.join(', ') : 'No subject times found',
                            subjects: subjects ? subjects.join(', ') : 'No subjects found',
                        };
                        console.log("Book cover URL:", newBook.cover_img);
                        console.log("New book details:", newBook);
                        // Update the state with the new book object
                        setBook(newBook);
                    }
                    else {
                        // Set the book object to null if the API response is empty
                        setBook(null);
                    }
                    // Set the loading state to false once the book details have been fetched
                    setLoading(false);
                }
                catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            });
        }
        getBookDetails();
    }, [id]);
    // Render a loading indicator while the book details are being fetched
    if (loading)
        return react_1.default.createElement(Loader_1.default, null);
    // Render the book details once they have been fetched
    return (react_1.default.createElement("section", { className: 'book-details' },
        react_1.default.createElement("div", { className: 'container' },
            react_1.default.createElement("button", { type: 'button', className: 'flex flex-c back-btn', onClick: () => navigate('/book') },
                react_1.default.createElement(fa_1.FaArrowLeft, { size: 22 }),
                react_1.default.createElement("span", { className: 'fs-18 fw-6' }, "Go Back")),
            react_1.default.createElement("div", { className: 'book-details-content grid' },
                react_1.default.createElement("div", { className: 'book-details-img' },
                    react_1.default.createElement("img", { src: book === null || book === void 0 ? void 0 : book.cover_img, alt: 'cover img' })),
                react_1.default.createElement("div", { className: 'book-details-info' },
                    react_1.default.createElement("div", { className: 'book-details-item title' },
                        react_1.default.createElement("span", { className: 'fw-6 fs-24' }, book === null || book === void 0 ? void 0 : book.title)),
                    react_1.default.createElement("div", { className: 'book-details-item description' },
                        react_1.default.createElement("span", null, book === null || book === void 0 ? void 0 : book.description)),
                    react_1.default.createElement("div", { className: 'book-details-item' },
                        react_1.default.createElement("span", { className: 'fw-6' }, "Subject Places: "),
                        react_1.default.createElement("span", { className: 'text-italic' }, book === null || book === void 0 ? void 0 : book.subject_places)),
                    react_1.default.createElement("div", { className: 'book-details-item' },
                        react_1.default.createElement("span", { className: 'fw-6' }, "Subjects: "),
                        react_1.default.createElement("span", null, book === null || book === void 0 ? void 0 : book.subjects)),
                    react_1.default.createElement("ul", { className: 'book-details-item' },
                        react_1.default.createElement("li", null, book && (react_1.default.createElement("a", { href: `https://en.wikipedia.org/wiki/${((_a = book.title) === null || _a === void 0 ? void 0 : _a.replace(/ /g, '_')) || 'Special:Search'}?title=Special%3ASearch&ns0=1`, target: "_blank", rel: "noreferrer" }, "View on Wikipedia"))),
                        react_1.default.createElement("li", null, book && (react_1.default.createElement("a", { href: `https://en.wikipedia.org/w/index.php?search=${(_b = book === null || book === void 0 ? void 0 : book.title) === null || _b === void 0 ? void 0 : _b.replace(/ /g, '+')}&title=Special%3ASearch&ns0=1`, target: "_blank", rel: "noreferrer" }, "View"))),
                        react_1.default.createElement("li", null,
                            react_1.default.createElement(Description_1.default, { bookUrl: `https://www.jkrowling.com/book/${(_c = book === null || book === void 0 ? void 0 : book.title) === null || _c === void 0 ? void 0 : _c.replace(/(and|the)/gi, '').replace(/[^a-zA-Z\s]/g, "").toLowerCase().replace(/\s+/g, "-")}/` })),
                        react_1.default.createElement("li", null,
                            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-cart-plus-fill", viewBox: "0 0 16 16" },
                                react_1.default.createElement("path", { d: "M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" })),
                            react_1.default.createElement("a", { href: `https://www.amazon.com/s?k=${book === null || book === void 0 ? void 0 : book.title}`, target: '_blank', rel: 'noreferrer' },
                                react_1.default.createElement("button", { className: 'buy-btn' }, "Buy on Amazon"))),
                        react_1.default.createElement("li", null,
                            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-cart-plus-fill", viewBox: "0 0 16 16" },
                                react_1.default.createElement("path", { d: "M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" })),
                            react_1.default.createElement("a", { href: `https://www.betterworldbooks.com/search/results?q=${book === null || book === void 0 ? void 0 : book.title}`, target: '_blank', rel: 'noreferrer' },
                                react_1.default.createElement("button", { className: 'buy-btn' }, "Buy on BetterWorldBooks"))),
                        react_1.default.createElement("li", null,
                            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-cart-plus-fill", viewBox: "0 0 16 16" },
                                react_1.default.createElement("path", { d: "M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" })),
                            react_1.default.createElement("a", { href: `https://www.goodreads.com/search?utf8=%E2%9C%93&query=${book === null || book === void 0 ? void 0 : book.title}`, target: '_blank', rel: 'noreferrer' },
                                react_1.default.createElement("button", { className: 'buy-btn' }, "Buy on Goodreads")))))))));
}
exports.default = BookDetails;
