import React, { useState, useContext, useEffect, useCallback, createContext } from "react";

interface Book {
    id: string;
    author: string;
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
            console.log(docs);



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
                        cover_id: cover_i,
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

// export { AppContext, AppProvider };