import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './BookList.css'

// Define a type for the props passed to the Book component
export type BookProps = {
    isFavorite: unknown;
    id: string;
    cover_img: string;
    title: string;
    author: string[];
    edition_count: number;
    first_publish_year: number;
    onAddToWishlist: (bookId: string) => void;
};
let counter = 0
let wishDict = {}


function Book(book: BookProps): JSX.Element {
    function handleWishlistButton() {
        counter += 1
        wishDict = [book.id, book.title]
        console.log('hey youve tried to catch wishlist button');
        console.log(counter);
        console.log(wishDict);

    }
    // const [onList, setOnList] = useState(false)

    // Render the book item using the props passed to the component
    return (
        <div className="book-item flex flex-column flex-sb">
            <div className="book-item-img">
                <img src={book.cover_img} alt="cover" />
            </div>
            <div className="book-item-info text-center">
                {/* Create a link to the book page using the book id */}
                <Link to={`/book/${book.id}`} {...book}>
                    <div className="book-item-info-item title fw-7 fs-18">
                        <span>{book.title}</span>
                    </div>

                </Link>


                {/* Display the book author(s) */}
                <div className="book-item-info-item author fs-15">
                    <span className='text-capitalize fw-7'>Author: </span>
                    <span>{book.author.join(", ")}</span>
                </div>

                {/* Display the total number of book editions */}
                <div className="book-item-info-item edition-count fs-15">
                    <span className='text-capitalize fw-7'>Total Editions: </span>
                    <span>{book.edition_count}</span>
                </div>

                {/* Display the book's first publish year */}
                <div className="book-item-info-item publish_year fs-15">
                    <span className='text-capitalize fw-7'>First Publish Year:  </span>
                    <span>{book.first_publish_year}</span>
                    <div className="book-item-info-item wishlist-btn">
                        <button
                            className="btn btn-wishlist"
                            onClick={handleWishlistButton}
                        // onClick={(event) => {
                        //     event.preventDefault();
                        //     book.onAddToWishlist(book.id);
                        //     console.log('handle wishlist button');

                        // }}
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bookmark-heart" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Book
