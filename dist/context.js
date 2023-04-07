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
exports.useGlobalContext = exports.AppProvider = exports.AppContext = void 0;
const react_1 = __importStar(require("react"));
const cover_not_found_jpg_1 = __importDefault(require("./images/cover_not_found.jpg"));
// Define the URL for the Open Library API
const URL = "https://openlibrary.org/search.json?title=";
exports.AppContext = (0, react_1.createContext)({
    loading: true,
    books: [],
    setSearchTerm: () => { },
    resultTitle: "",
    setResultTitle: () => { },
    wishlist: [],
    addToWishlist: () => { },
    removeFromWishlist: () => { },
});
// Create the AppProvider component to wrap the entire application with the AppContext
const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = (0, react_1.useState)("the lost world");
    const [books, setBooks] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [resultTitle, setResultTitle] = (0, react_1.useState)("");
    const [wishlist, setWishlist] = (0, react_1.useState)([]);
    const addToWishlist = (book) => {
        console.log("Adding book to wishlist:", book); // Add this console.log statement
        setWishlist([...wishlist, book]);
    };
    const removeFromWishlist = (bookId) => {
        setWishlist((currentWishlist) => currentWishlist.filter((book) => book.id !== bookId));
    };
    const fetchBooks = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        try {
            const response = yield fetch(`${URL}${searchTerm}`);
            const data = yield response.json();
            console.log("data", data);
            const docs = data.docs || [];
            console.log("docs", docs);
            if (docs.length > 0) {
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const { key, author_name, cover_i, edition_count, first_publish_year, title, } = bookSingle;
                    return {
                        id: key,
                        author_name: author_name,
                        cover_id: cover_i,
                        cover_img: cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg` : cover_not_found_jpg_1.default,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title,
                    };
                });
                setBooks(newBooks);
                if (newBooks.length > 1) {
                    setResultTitle("Your Search Result");
                }
                else {
                    setResultTitle("No Search Result Found!");
                }
            }
            else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false);
        }
        catch (error) {
            console.log(error);
            setLoading(false);
        }
    }), [searchTerm]);
    (0, react_1.useEffect)(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);
    return (react_1.default.createElement(exports.AppContext.Provider, { value: {
            loading, books, setSearchTerm, resultTitle,
            setResultTitle, wishlist, addToWishlist, removeFromWishlist
        } }, children));
};
exports.AppProvider = AppProvider;
const useGlobalContext = () => {
    return (0, react_1.useContext)(exports.AppContext);
};
exports.useGlobalContext = useGlobalContext;
