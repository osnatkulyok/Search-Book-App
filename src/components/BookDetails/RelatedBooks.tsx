

import React, { useState, useEffect } from 'react';

export type RelatedBooksProps = {
    bookId: string;
};

const RelatedBooks: React.FC<RelatedBooksProps> = ({ bookId }) => {
    const [relatedBooks, setRelatedBooks] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://openlibrary.org/works/${bookId}.json`);
                const data = await response.json();
                console.log('Book data:', data);

                // Extract keywords from book title
                const titleWords = data.title.split(' ');
                console.log('Title words:', titleWords);
                const keywords = titleWords.filter((word: string | any[]) => word.length > 3).slice(0, 3);
                console.log('Keywords:', keywords);

                // Fetch related books using keywords
                const relatedBooksResponse = await fetch(`http://openlibrary.org/search.json?q=${keywords.join('+')}&limit=5`);
                //related books data
                const relatedBooksData = await relatedBooksResponse.json();

                const relatedBookTitles = relatedBooksData.docs.map((book: any) => book.title);

                setRelatedBooks(relatedBookTitles);
                console.log('Related books data:', relatedBooksData);

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [bookId]);

    return (
        <div>
            <h2>Related Books</h2>
            <ul>
                {relatedBooks.map((book, index) => (
                    <li key={index}>{book}</li>
                ))}
            </ul>
        </div>
    );
};

export default RelatedBooks;
