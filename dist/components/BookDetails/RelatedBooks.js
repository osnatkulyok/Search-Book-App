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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const RelatedBooks = ({ bookId }) => {
    const [relatedBooks, setRelatedBooks] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield fetch(`https://openlibrary.org/works/${bookId}.json`);
                const data = yield response.json();
                console.log('Book data:', data);
                // Extract keywords from book title
                const titleWords = data.title.split(' ');
                console.log('Title words:', titleWords);
                const keywords = titleWords.filter((word) => word.length > 3).slice(0, 3);
                console.log('Keywords:', keywords);
                // Fetch related books using keywords
                const relatedBooksResponse = yield fetch(`http://openlibrary.org/search.json?q=${keywords.join('+')}&limit=5`);
                //related books data
                const relatedBooksData = yield relatedBooksResponse.json();
                const relatedBookTitles = relatedBooksData.docs.map((book) => book.title);
                setRelatedBooks(relatedBookTitles);
                console.log('Related books data:', relatedBooksData);
            }
            catch (error) {
                console.log(error);
            }
        });
        fetchData();
    }, [bookId]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "Related Books"),
        react_1.default.createElement("ul", null, relatedBooks.map((book, index) => (react_1.default.createElement("li", { key: index }, book))))));
};
exports.default = RelatedBooks;
