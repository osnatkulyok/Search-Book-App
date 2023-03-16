import React from 'react';
import { useGlobalContext } from 'src/context';
import Book, { BookProps } from './Book';
import Loading from '../Loader/Loader';
import cover_not_found from '../../images/cover_not_found.jpg';
import './BookList.css';

type BookListProps = {
    onAddToWishlist: (bookId: string) => void;
};

function BookList({ onAddToWishlist }: BookListProps): JSX.Element {
    // Get books, loading, and resultTitle from the global context
    const { books, loading, resultTitle } = useGlobalContext();

    const booksWithCovers: BookProps[] = books.map((singleBook) => {
        return {
            ...singleBook,
            // Remove the "/works/" prefix from the book ID to create a valid URL parameter
            id: (singleBook.id as string).replace("/works/", ""),
            // Use the Open Library Covers API to get the cover image URL
            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : cover_not_found,
            author: Array.isArray(singleBook.author) ? singleBook.author : [singleBook.author],
            onAddToWishlist: onAddToWishlist,
        };
    });

    // Show a loading spinner if books are still being fetched
    if (loading) return <Loading />;

    return (
        <section className="booklist">
            <div className="container">
                <div className="section-title">
                    <h2>{resultTitle}</h2>
                </div>
                <div className="booklist-content grid">
                    {booksWithCovers.slice(0, 30).map((item, index) => {
                        return (
                            <Book key={index} {...item} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default BookList;
