
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './BookList.css';
// import { useGlobalContext, Book as BookType } from '../../context';

// export type BookProps = {
//     isFavorite: boolean;
//     id: string;
//     cover_img: string;
//     title: string;
//     author: string[];
//     edition_count: number;
//     first_publish_year: number;
//     isWishlist?: boolean;
//     onAddToWishlist: (book: BookType) => void;
// };


// function Book({ id, cover_img, title, author, edition_count, first_publish_year, onAddToWishlist, isFavorite }: BookProps): JSX.Element {
//     const { removeFromWishlist } = useGlobalContext();

//     function handleWishlistButton() {
//         const bookToAdd = {
//             id,
//             title,
//             author,
//             cover_img,
//             edition_count,
//             first_publish_year,
//             key: '',
//             author_name: author,
//             cover_id: 0,
//             isFavorite: isFavorite,
//         };

//         if (isFavorite) {
//             removeFromWishlist(edition_count);
//         } else {
//             onAddToWishlist(bookToAdd);
//         }
//     }
//     return (
//         <div className="book-item flex flex-column flex-sb">
//             <div className="book-item-img">
//                 <img src={cover_img} alt="cover" />
//             </div>
//             <div className="book-item-info text-center">
//                 <Link to={`/book/${id}`}>
//                     <div className="book-item-info-item title fw-7 fs-18">
//                         <span>{title}</span>
//                     </div>
//                 </Link>
//                 <div className="book-item-info-item author fs-15">
//                     <span className="text-capitalize fw-7">Author: </span>
//                     <span>{author.join(', ')}</span>
//                 </div>
//                 <div className="book-item-info-item edition-count fs-15">
//                     <span className="text-capitalize fw-7">Total Editions: </span>
//                     <span>{edition_count}</span>
//                 </div>
//                 <div className="book-item-info-item publish_year fs-15">
//                     <span className="text-capitalize fw-7">First Publish Year: </span>
//                     <span>{first_publish_year}</span>
//                 </div>
//                 <div className="book-item-info-item wishlist-btn">
//                     <button className="btn btn-wishlist" onClick={handleWishlistButton}>
// <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bookmark-heart" viewBox="0 0 16 16">
//     <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
//     <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
// </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Book;
// ////////////////////
import React from 'react';
import { Link } from 'react-router-dom';
import './BookList.css';
import { useGlobalContext, Book as BookType } from '../../context';

export type BookProps = {
    isFavorite: boolean;
    id: string;
    cover_img: string;
    title: string;
    author: string[];
    edition_count: number;
    first_publish_year: number;
    isWishlist?: boolean;
    onAddToWishlist: (book: BookType) => void;
};

function Book({ id, cover_img, title, author, edition_count, first_publish_year, onAddToWishlist, isFavorite }: BookProps): JSX.Element {
    const { removeFromWishlist } = useGlobalContext();

    function handleWishlistButton() {
        const bookToAdd = {
            id,
            title,
            author,
            cover_img,
            edition_count,
            first_publish_year,
            key: '',
            author_name: author,
            cover_id: 0,
            isFavorite: isFavorite,
        };

        if (isFavorite) {
            removeFromWishlist(edition_count);
        } else {
            onAddToWishlist(bookToAdd);
        }
    }
    const handleClick = () => {
        console.log('clicked');
    };

    return (
        <div className="book-item flex flex-column flex-sb">

            <div className="book-item-info text-center">
                <div className="book-item-info-item">
                    <Link to={`/book/${id}`} className="book-details-button">
                        <img src={cover_img} alt="cover" onClick={handleClick} />
                    </Link>
                </div>
                <div className="book-item-info-item title fw-7 fs-18">
                    <Link to={`/book/${id}`} onClick={handleClick}>
                        <span>{title}</span>
                    </Link>
                </div>
                <div className="book-item-info-item author fs-15">
                    <span className="text-capitalize fw-7">Author: </span>
                    <span>{author.join(', ')}</span>
                </div>
                <div className="book-item-info-item edition-count fs-15">
                    <span className="text-capitalize fw-7">Total Editions: </span>
                    <span>{edition_count}</span>
                </div>
                <div className="book-item-info-item publish_year fs-15">
                    <span className="text-capitalize fw-7">First Publish Year: </span>
                    <span>{first_publish_year}</span>
                </div>
                <div className="book-item-info-item wishlist-btn">
                    <button className="btn btn-wishlist" onClick={handleWishlistButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bookmark-heart" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Book;






