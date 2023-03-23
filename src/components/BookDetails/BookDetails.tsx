import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../Loader/Loader';
import coverNotFound from '../../images/cover_not_found.jpg';
import './BookDetails.css';
import { FaArrowLeft } from 'react-icons/fa';

// The base URL for fetching book details
const URL = 'https://openlibrary.org/works/';

// Define a type for the book data
export interface MyBookDetails {
    description: string;
    title: string;
    cover_img: string;
    subject_places: string;
    subject_times: string;
    subjects: string;
}


function BookDetails(): JSX.Element {
    // Get the book ID from the URL parameters
    // Define a type for the params object returned by useParams()
    const { id } = useParams<{ id: string }>();
    // Define state variables to store the book details and loading state
    const [loading, setLoading] = useState(false);
    const [book, setBook] = useState<MyBookDetails | null>(null);
    // Define a navigate function to programmatically navigate to a new route
    const navigate = useNavigate();

    // Use the useEffect hook to fetch the book details when the component mounts or the ID changes
    useEffect(() => {
        setLoading(true);
        async function getBookDetails() {
            try {
                // Make a request to the Open Library API to get the book details
                const response = await fetch(`${URL}${id}.json`);
                const data = await response.json();

                if (data) {
                    // Extract the relevant book properties from the API response
                    const {
                        description,
                        title,
                        covers,
                        subject_places,
                        subject_times,
                        subjects,
                    } = data;

                    // Create a new book object with the extracted properties
                    const newBook: MyBookDetails = {
                        description: description ? description.value : 'No description found',
                        title: title,
                        cover_img: covers ? `https://openlibrary.org/b/id/${covers[0]}-L.jpg` : coverNotFound,
                        subject_places: subject_places ? subject_places.join(', ') : 'No subject places found',
                        subject_times: subject_times ? subject_times.join(', ') : 'No subject times found',
                        subjects: subjects ? subjects.join(', ') : 'No subjects found',
                    };

                    // Update the state with the new book object
                    setBook(newBook);

                } else {
                    // Set the book object to null if the API response is empty
                    setBook(null);
                }
                // Set the loading state to false once the book details have been fetched
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getBookDetails();
    }, [id]);

    // Render a loading indicator while the book details are being fetched
    if (loading) return <Loading />;

    // Render the book details once they have been fetched
    return (
        <section className='book-details'>
            <div className='container'>
                <button type='button' className='flex flex-c back-btn' onClick={() => navigate('/book')}>
                    <FaArrowLeft size={22} />
                    <span className='fs-18 fw-6'>Go Back</span>
                </button>

                <div className='book-details-content grid'>
                    <div className='book-details-img'>
                        <img src={book?.cover_img} alt='cover img' />
                    </div>
                    <div className='book-details-info'>
                        <div className='book-details-item title'>
                            <span className='fw-6 fs-24'>{book?.title}</span>
                        </div>
                        <div className='book-details-item description'>
                            <span>{book?.description}</span>
                        </div>
                        <div className='book-details-item'>
                            <span className='fw-6'>Subject Places: </span>
                            <span className='text-italic'>{book?.subject_places}</span>
                        </div>
                        <div className='book-details-item'>
                            <span className='fw-6'>Subjects: </span>
                            <span>{book?.subjects}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookDetails;
