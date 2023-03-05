import React, { useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './SearchForm.css';

function SearchForm(): JSX.Element {
    // Get the setSearchTerm and setResultTitle functions from the global context
    const { setSearchTerm, setResultTitle } = useGlobalContext();

    // Create a ref for the search input field
    const searchText = useRef<HTMLInputElement>(null);

    // Get the navigate function from react-router-dom
    const navigate = useNavigate();

    // Use useEffect to focus on the search input field when the component mounts
    useEffect(() => {
        if (searchText.current !== null) {
            searchText.current.focus();
        }
    }, []);

    // Define the function that handles form submissions
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Get the trimmed search term from the input field
        let tempSearchTerm = searchText.current?.value.trim();

        // If the search term is empty or contains only non-word characters and spaces, set the search term to a default value and display an error message
        if ((tempSearchTerm?.replace(/[^\w\s]/gi, "") ?? "").length === 0) {
            setSearchTerm("the lost world");
            setResultTitle("Please Enter Something...");
        } else {
            // Otherwise, set the search term to the entered value
            setSearchTerm(tempSearchTerm ?? "the lost world");
        }

        // Navigate to the /book route
        navigate("/book");
    };

    return (
        <div className="search-form">
            <div className="container">
                <div className="search-form-content">
                    <form className="search-form" onSubmit={handleSubmit}>
                        <div className="search-form-elem flex flex-sb bg-white">
                            <input type="text" className="form-control" placeholder='the lost world...' ref={searchText} />
                            <button type='submit' className="flex flex-c">
                                {/* Search icon */}
                                <FaSearch className="text-purple" size={32} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchForm;
