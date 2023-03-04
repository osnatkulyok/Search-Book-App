// import React, { useState, useContext, useEffect, useCallback } from "react";

// // Define the Book interface to ensure type safety
// interface Book {
//     id: string;
//     author: string;
//     edition_count: number;
//     first_publish_year: number;
//     title: string;
// }

// // The URL to fetch data from
// const URL = "http://openlibrary.org/search.json?title=";

// // Create the AppContext to share state between components
// const AppContext = React.createContext<any>(null);

// // Wrap the app with AppProvider to provide state to children
// function AppProvider({ children }: any) {
//     // Initialize state variables
//     const [searchTerm, setSearchTerm] = useState<string>("the lost world");
//     const [books, setBooks] = useState<Book[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [resultTitle, setResultTitle] = useState<string>("");

//     // Create a memoized function to fetch books based on the search term
//     const fetchBooks = useCallback(async () => {
//         setLoading(true);

//         try {
//             // Fetch the data from the API
//             const response = await fetch(`${URL}${searchTerm}`);
//             const data = await response.json();

//             // Extract the book data from the response
//             const docs = data.docs || [];

//             if (docs.length > 0) {
//                 // Map the book data to a simpler Book interface
//                 const newBooks = docs.slice(0, 20).map((bookSingle: any) => {
//                     const {
//                         key,
//                         author_name,
//                         cover_i,
//                         edition_count,
//                         first_publish_year,
//                         title,
//                     } = bookSingle;

//                     return {
//                         id: key,
//                         author: author_name,
//                         edition_count: edition_count,
//                         first_publish_year: first_publish_year,
//                         title: title,
//                     };
//                 });

//                 // Update the state with the new book data and title
//                 setBooks(newBooks);

//                 if (newBooks.length > 1) {
//                     setResultTitle("Your Search Result");
//                 } else {
//                     setResultTitle("No Search Result Found!");
//                 }
//             } else {
//                 // Update the state to indicate that no books were found
//                 setBooks([]);
//                 setResultTitle("No Search Result Found!");
//             }

//             // Indicate that loading has finished
//             setLoading(false);
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//         }
//     }, [searchTerm]);

//     // Call the fetchBooks function whenever the search term changes
//     useEffect(() => {
//         fetchBooks();
//     }, [searchTerm, fetchBooks]);

//     return (
//         // Provide the state to children using AppContext.Provider
//         <AppContext.Provider
//             value={{ loading, books, setSearchTerm, resultTitle, setResultTitle }}
//         >
//             {children}
//         </AppContext.Provider>
//     );
// }

// // Create a custom hook to easily access the state variables from the context
// export const useGlobalContext = () => {
//     return useContext(AppContext);
// };

// export { AppContext, AppProvider };
import React, { useState, useContext, useEffect, useCallback, createContext } from "react";

interface Book {
    id: string;
    author: string;
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
}>({
    loading: true,
    books: [],
    setSearchTerm: () => { },
    resultTitle: "",
    setResultTitle: () => { },
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState<string>("the lost world");
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [resultTitle, setResultTitle] = useState<string>("");

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
                        cover_i,
                        edition_count,
                        first_publish_year,
                        title,
                    } = bookSingle;

                    return {
                        id: key,
                        author: author_name,
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
            value={{ loading, books, setSearchTerm, resultTitle, setResultTitle }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
