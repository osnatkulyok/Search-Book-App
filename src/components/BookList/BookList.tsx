import React, { useState } from 'react';
// import { useGlobalContext } from 'src/context';
// import Book, { BookProps } from './Book';
// import Loading from '../Loader/Loader';
// import cover_not_found from '../../images/cover_not_found.jpg';
// import './BookList.css';

// type BookListProps = {
//     onAddToWishlist: (book: {
//         id: string;
//         title: string;
//         author: string[];
//         cover_img: string;
//         edition_count: number;
//         first_publish_year: number;
//     }) => void;
// };

// function BookList({ onAddToWishlist }: BookListProps): JSX.Element {
//     // Get books, loading, and resultTitle from the global context
//     const { books, loading, resultTitle } = useGlobalContext();

//     const [showFavorites, setShowFavorites] = useState(false); // Add state to track whether to show only favorites or all books

//     const booksWithCovers: BookProps[] = books.map((singleBook) => {
//         return {
//             ...singleBook,
//             // Check if the book ID exists before trying to remove the "/works/" prefix
//             id: singleBook.id
//                 ? (singleBook.id as string).replace('/works/', '')
//                 : '',
//             cover_img: singleBook.cover_id
//                 ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
//                 : cover_not_found,
//             author: Array.isArray(singleBook.author)
//                 ? singleBook.author
//                 : [singleBook.author],
//             onAddToWishlist: onAddToWishlist,
//             isFavorite: false,
//         };
//     });


//     // Show a loading spinner if books are still being fetched
//     if (loading) return <Loading />;

//     // Filter the books to show only favorites if the toggle is on
//     const booksToDisplay = showFavorites
//         ? booksWithCovers.filter((book) => book.isFavorite)
//         : booksWithCovers;

//     return (
//         <section className="booklist">
//             <div className="container">
//                 <div className="section-title">
//                     <h2>{resultTitle}</h2>
//                     <button
//                         className="btn"
//                         onClick={() => setShowFavorites(!showFavorites)}
//                     >
//                         {showFavorites ? 'Show All Books' : 'Show Favorites'}
//                     </button>
//                 </div>
//                 <div className="booklist-content grid">
//                     {booksToDisplay.slice(0, 30).map((item, index) => {
//                         return <Book key={index} {...item} />;
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default BookList;import React, { useState } from 'react';
import { useGlobalContext } from 'src/context';
import Book, { BookProps } from './Book';
import Loading from '../Loader/Loader';
import cover_not_found from '../../images/cover_not_found.jpg';
import './BookList.css';

function BookList(): JSX.Element {
    const { books, loading, resultTitle, addToWishlist, wishlist } = useGlobalContext();
    console.log('wishlist', wishlist);


    const [showFavorites, setShowFavorites] = useState(false);

    const booksWithCovers: BookProps[] = books.map((singleBook) => {
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
