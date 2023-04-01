
import React from 'react';
import { useGlobalContext } from 'src/context'; // Import the global context hook
import Book, { BookProps } from './Book';
import Loading from '../Loader/Loader';
import cover_not_found from '../../images/cover_not_found.jpg';
import './BookList.css';

function BookList(): JSX.Element {
    // Destructure the properties from the global context
    const { books, loading, resultTitle, addToWishlist, wishlist } = useGlobalContext();
    console.log('books', books);

    // Log the numbers extracted from the book ids to the console
    console.log("id array", books.map((book) => book.id.replace(/^\/works\/OL/, '')));

    // Log the wishlist to the console
    console.log('wishlist', wishlist);


    const booksWithCovers: BookProps[] = books.map((singleBook: { id: string; cover_id: any; title: any; author_name: any; edition_count: any; first_publish_year: any; }) => {
        const cover_id = singleBook.cover_id;
        console.log("cover", cover_id);

        const cover_img = cover_id ? `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg` : cover_not_found;

        return {
            id: singleBook.id ? (singleBook.id as string).replace('/works/', '') : '',
            cover_img,
            title: singleBook.title || '',
            author: singleBook.author_name || [],
            edition_count: singleBook.edition_count || '',
            first_publish_year: singleBook.first_publish_year || '',
            onAddToWishlist: addToWishlist,
            isFavorite: false,
        };
    });






    console.log("id array after map", booksWithCovers.map((book) => book.cover_id));




    // Render a loading indicator if the books are still loading
    if (loading) return <Loading />;

    // Filter the books based on whether to show only favorites or all books
    const booksToDisplay = booksWithCovers;


    return (
        <section className="booklist">
            <div className="container">
                <div className="section-title">
                    <h2>{resultTitle}</h2>
                </div>
                <div className="booklist-content grid">
                    {/* Map the booksToDisplay array to Book components */}
                    {booksToDisplay.slice(0, 30).map((item, index) => {
                        return <Book key={index} {...item} />;
                    })}
                </div>
            </div>
        </section>
    );
}

export default BookList;
