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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const fa_1 = require("react-icons/fa");
const react_router_dom_1 = require("react-router-dom");
const context_1 = require("../../context");
require("./SearchForm.css");
function SearchForm() {
    // Get the setSearchTerm and setResultTitle functions from the global context
    const { setSearchTerm, setResultTitle } = (0, context_1.useGlobalContext)();
    // Create a ref for the search input field
    const searchText = (0, react_1.useRef)(null);
    // Get the navigate function from react-router-dom
    const navigate = (0, react_router_dom_1.useNavigate)();
    // Use useEffect to focus on the search input field when the component mounts
    (0, react_1.useEffect)(() => {
        if (searchText.current !== null) {
            searchText.current.focus();
        }
    }, []);
    // Define the function that handles form submissions
    function handleSubmit(e) {
        var _a, _b;
        e.preventDefault();
        // Get the trimmed search term from the input field
        let tempSearchTerm = (_a = searchText.current) === null || _a === void 0 ? void 0 : _a.value.trim();
        // If the search term is empty or contains only non-word characters and spaces, set the search term to a default value and display an error message
        if (((_b = tempSearchTerm === null || tempSearchTerm === void 0 ? void 0 : tempSearchTerm.replace(/[^\w\s]/gi, "")) !== null && _b !== void 0 ? _b : "").length === 0) {
            setSearchTerm("the lost world");
            setResultTitle("Please Enter Something...");
        }
        else {
            // Otherwise, set the search term to the entered value
            setSearchTerm(tempSearchTerm !== null && tempSearchTerm !== void 0 ? tempSearchTerm : "the lost world");
        }
        // Navigate to the /book route
        navigate("/book");
    }
    ;
    return (react_1.default.createElement("div", { className: "search-form" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("div", { className: "search-form-content" },
                react_1.default.createElement("form", { className: "search-form", onSubmit: handleSubmit },
                    react_1.default.createElement("div", { className: "search-form-elem flex flex-sb bg-white" },
                        react_1.default.createElement("input", { type: "text", className: "form-control", placeholder: 'the lost world...', ref: searchText }),
                        react_1.default.createElement("button", { type: 'submit', className: "flex flex-c" },
                            react_1.default.createElement(fa_1.FaSearch, { className: "text-purple search-glass", size: 32 }))))))));
}
exports.default = SearchForm;
