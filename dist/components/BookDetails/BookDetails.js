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
// The base URL for fetching book details
const URL = 'https://openlibrary.org/works/';
function BookDetails() {
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
                        // Create a new book object with the extracted properties
                        const newBook = {
                            description: description ? description.value : 'No description found',
                            title: title,
                            cover_img: covers ? `https://openlibrary.org/b/id/${covers[0]}-L.jpg` : cover_not_found_jpg_1.default,
                            subject_places: subject_places ? subject_places.join(', ') : 'No subject places found',
                            subject_times: subject_times ? subject_times.join(', ') : 'No subject times found',
                            subjects: subjects ? subjects.join(', ') : 'No subjects found',
                        };
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
                        react_1.default.createElement("span", null, book === null || book === void 0 ? void 0 : book.subjects)))))));
}
exports.default = BookDetails;
