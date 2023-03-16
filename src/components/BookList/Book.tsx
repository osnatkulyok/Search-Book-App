import React from 'react'
import { Link } from 'react-router-dom'
import './BookList.css'

// Define a type for the props passed to the Book component
export type BookProps = {
    id: string;
    cover_img: string;
    title: string;
    author: string[];
    edition_count: number;
    first_publish_year: number;
    onAddToWishlist: (bookId: string) => void;
};

function Book(book: BookProps): JSX.Element {

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
                </div>
            </div>
        </div>
    )
}

export default Book
