import React, { useState } from 'react';
import { useGlobalContext } from 'src/context';
import Book, { BookProps } from './Book';
import Loading from '../Loader/Loader';
import cover_not_found from '../../images/cover_not_found.jpg';
import './BookList.css';

function BookList(): JSX.Element {
    const { books, loading, resultTitle, addToWishlist, wishlist } = useGlobalContext();
    console.log('wishlist', wishlist);


    const [showFavorites, setShowFavorites] = useState(false);

    const booksWithCovers: BookProps[] = books.map((singleBook: { id: string; cover_id: any; title: any; author_name: any; edition_count: any; first_publish_year: any; }) => {
        return {
            id: singleBook.id
                ? (singleBook.id as string).replace('/works/', '')
                : '',
            cover_img: singleBook.cover_id
                ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
                : cover_not_found,
            title: singleBook.title,
            author: Array.isArray(singleBook.author_name)
                ? singleBook.author_name
                : [singleBook.author_name],
            edition_count: singleBook.edition_count,
            first_publish_year: singleBook.first_publish_year,
            onAddToWishlist: addToWishlist, // Use addToWishlist from the context
            isFavorite: false,
        };
    });


    if (loading) return <Loading />;

    const booksToDisplay = showFavorites
        ? booksWithCovers.filter((book) => book.isFavorite)
        : booksWithCovers;

    return (
        <section className="booklist">
            <div className="container">
                <div className="section-title">
                    <h2>{resultTitle}</h2>
                    <button
                        className="btn"
                        onClick={() => setShowFavorites(!showFavorites)}
                    >
                        {showFavorites ? 'Show All Books' : 'Show Favorites'}
                    </button>
                </div>
                <div className="booklist-content grid">
                    {booksToDisplay.slice(0, 30).map((item, index) => {
                        return <Book key={index} {...item} />;
                    })}
                </div>
            </div>
        </section>
    );
}

export default BookList;
