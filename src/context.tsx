// import React, { useState, useContext, useEffect, useCallback, createContext } from "react";

// // Defining the Book interface
// interface Book {
//     isFavorite: unknown;
//     author_name: any;
//     id: string;
//     key: string;
//     author: string[];
//     cover_id: number,
//     edition_count: number;
//     first_publish_year: number;
//     title: string;
// }

// // Defining the URL endpoint
// const URL = "https://openlibrary.org/search.json?title=";

// // Creating a context for the app
// export const AppContext = createContext<{
//     loading: boolean;
//     books: Book[];
//     setSearchTerm: (searchTerm: string) => void;
//     resultTitle: string;
//     setResultTitle: (resultTitle: string) => void;
//     wishlist: Book[];
//     addToWishlist: (book: Book) => void;
//     removeFromWishlist: (bookId: string) => void;
// }>({
//     loading: true,
//     books: [],
//     setSearchTerm: () => { },
//     resultTitle: "",
//     setResultTitle: () => { },
//     wishlist: [],
//     addToWishlist: () => { },
//     removeFromWishlist: () => { },
// });

// // Defining the provider for the app context
// export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

//     // Defining the state hooks
//     const [searchTerm, setSearchTerm] = useState<string>("the lost world");
//     const [books, setBooks] = useState<Book[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [resultTitle, setResultTitle] = useState<string>("");
//     const [wishlist, setWishlist] = useState<Book[]>([]);

//     // Function to add a book to the wishlist
//     const addToWishlist = (book: Book) => {
//         console.log("Adding book to wishlist:", book); // Add this console.log statement to check if the function is being called and if the book is being correctly added to the wishlist
//         setWishlist([...wishlist, book]);
//     };

//     // Function to remove a book from the wishlist
//     const removeFromWishlist = (bookId: string) => {
//         console.log("Removing book from wishlist:", bookId);
//         setWishlist(wishlist.filter(book => book.id !== bookId));
//     };

//     // Function to fetch books from the Open Library API
//     const fetchBooks = useCallback(async () => {
//         setLoading(true);

//         try {
//             const response = await fetch(`${URL}${searchTerm}`);
//             const data = await response.json();

//             const docs = data.docs || [];
//             console.log(docs);

//             if (docs.length > 0) {
//                 const newBooks = docs.slice(0, 20).map((bookSingle: any) => {
//                     const {
//                         key,
//                         author_name,
//                         cover_id,
//                         edition_count,
//                         first_publish_year,
//                         title,
//                     } = bookSingle;

//                     return {
//                         key: key,
//                         author_name: author_name,
//                         cover_id: cover_id,
//                         edition_count: edition_count,
//                         first_publish_year: first_publish_year,
//                         title: title,
//                     };
//                 });

//                 setBooks(newBooks);

//                 if (newBooks.length > 1) {
//                     setResultTitle("Your Search Result");
//                 } else {
//                     setResultTitle("No Search Result Found!");
//                 }
//             } else {
//                 setBooks([]);
//                 setResultTitle("No Search Result Found!");
//             }

//             setLoading(false);
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//         }
//     }, [searchTerm]);

//     // Fetching books on initial render and whenever the search term changes
//     useEffect(() => {
//         fetchBooks();
//     }, [searchTerm, fetchBooks]);

//     // Rendering the provider with the app context value and the children
//     return (
//         <AppContext.Provider
//             value={{
//                 loading, books, setSearchTerm, resultTitle,
//                 setResultTitle, wishlist, addToWishlist, removeFromWishlist
//             }}
//         >
//             {children}
//         </AppContext.Provider>
//     );
// };

// // Creating a custom hook to access the app context
// export const useGlobalContext = () => {
//     return useContext(AppContext);
// };
import React, { useState, useContext, useEffect, useCallback, createContext } from "react";

export interface Book {
    isFavorite: unknown;
    author_name: string[];
    id: string;
    key: string;
    author: string[];
    cover_id: number,
    edition_count: number;
    first_publish_year: number;
    title: string;
}

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

            if (docs.length > 0) {
                const newBooks = docs.slice(0, 20).map((bookSingle: any) => {
                    const {
                        key,
                        author_name,
                        cover_id,
                        edition_count,
                        first_publish_year,
                        title,
                    } = bookSingle;

                    return {
                        key: key,
                        author_name: author_name,
                        cover_id: cover_id,
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

