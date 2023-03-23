import React, { useState, useContext, useEffect, useCallback, createContext } from "react";
import cover_not_found from './images/cover_not_found.jpg'

export interface Book {
    isFavorite: unknown;
    author_name: string[];
    id: string;
    key: string;
    author: string[];
    cover_id: number,
    cover_img: string;
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

    // TODO changing the display of 'like' button
    // const [isClicked, setIsClicked] = useState(false);
    // const handleWishlistButton = (book: Book) => {
    //     setIsClicked(!isClicked);
    //     addToWishlist(book);
    // };

    // const addToWishlist = (book: Book) => {
    //     console.log("Adding book to wishlist:", book);
    //     setWishlist([...wishlist, book]);
    // };
    //     <button className="btn btn-wishlist" onClick={() => handleWishlistButton(yourBook)}>
    //     {isClicked ? (
    //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
    //             <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
    //         </svg>
    //     ) : (
    //         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bookmark-heart" viewBox="0 0 16 16">
    //             <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
    //             <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
    //         </svg>
    //     )}
    // </button>

    // const removeFromWishlist = (bookEditionCount: number) => {
    //     setWishlist((currentWishlist) => currentWishlist.filter((book) => book.edition_count !== bookEditionCount));
    // };
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
                        id: key, // Use 'key' as 'id'
                        author_name: author_name,
                        cover_id: cover_id,
                        cover_img: cover_id ? `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg` : cover_not_found,
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

