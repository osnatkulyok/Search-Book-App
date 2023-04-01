import React, { useState, useContext, useEffect, useCallback, createContext } from "react";
import cover_not_found from './images/cover_not_found.jpg'


// Define the Book interface
export interface Book {
    isFavorite: unknown;
    author_name: string[];
    id: string;
    key: string;
    author: string[];
    cover_id: number;
    cover_img: string;
    edition_count: number;
    first_publish_year: number;
    title: string;
}

// Define the URL for the Open Library API
const URL = "https://openlibrary.org/search.json?title=";


export const AppContext = createContext<{
    loading: boolean;
    books: Book[];
    setSearchTerm: (searchTerm: string) => void;
    resultTitle: string;
    setResultTitle: (resultTitle: string) => void;
    wishlist: Book[];
    addToWishlist: (book: Book) => void;
    removeFromWishlist: (bookId: string) => void;
}>({
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
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState<string>("the lost world");
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [resultTitle, setResultTitle] = useState<string>("");
    const [wishlist, setWishlist] = useState<Book[]>([]);


    const addToWishlist = (book: Book) => {
        console.log("Adding book to wishlist:", book); // Add this console.log statement
        setWishlist([...wishlist, book]);
    };

    const removeFromWishlist = (bookId: string) => {
        setWishlist((currentWishlist) => currentWishlist.filter((book) => book.id !== bookId));
    };


    const fetchBooks = useCallback(async () => {
        setLoading(true);

        try {
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();

            const docs = data.docs || [];
            console.log("docs", docs);

            if (docs.length > 0) {
                const newBooks = docs.slice(0, 20).map((bookSingle: any) => {
                    const {
                        key,
                        author_name,
                        cover_i,
                        edition_count,
                        first_publish_year,
                        title,
                    } = bookSingle;

                    return {
                        id: key, // Use 'key' as 'id'
                        author_name: author_name,
                        cover_id: cover_i,
                        cover_img: cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg` : cover_not_found,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title,
                    };

                });


                setBooks(newBooks);

                if (newBooks.length > 1) {
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!");
                }
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider
            value={{
                loading, books, setSearchTerm, resultTitle,
                setResultTitle, wishlist, addToWishlist, removeFromWishlist
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

