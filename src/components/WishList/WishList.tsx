// import React, { useState } from 'react';
// import { BookProps } from '../BookList/Book';

// // Define the type of props expected by the component
// type WishlistItemProps = {
//     book: BookProps; // The book object to display
//     onRemove: (bookId: string) => void; // A callback function to remove the book from the wishlist
// };

// // Define the component function
// export function WishList({ book, onRemove }: WishlistItemProps): JSX.Element {

//     // Define the state for the list of favorite books
//     const [favorites, setFavorites] = useState<BookProps[]>([]);

//     // Destructure the book object properties
//     const { id, title, author, cover_img } = book ?? {};

//     // Define a function to handle the "Remove" button click event
//     const handleRemoveClick = () => {
//         onRemove(id);
//     };

//     // Define a function to handle the "Add to Favorites" button click event
//     const handleAddToFavorites = () => {
//         setFavorites([...favorites, book]);
//     };

//     // Define a function to handle the "Remove from Favorites" button click event
//     const handleRemoveFromFavorites = () => {
//         const filteredFavorites = favorites.filter((favorite) => favorite.id !== id);
//         setFavorites(filteredFavorites);
//     };

//     // Check if the book is already in the favorites list
//     const isFavorite = favorites.some((favorite) => favorite.id === id);

//     // Return the JSX elements to display the book details and buttons
//     return (
//         <div className="wishlist-item" style={{ backgroundColor: 'black' }}>
//             <img src={cover_img} alt={title} />
//             <div className="wishlist-item-details">
//                 <h3>{title}</h3>
//                 {author && <p>By: {author.join(', ')}</p>}
//             </div>
//             {isFavorite ? (
//                 <button onClick={handleRemoveFromFavorites}>Remove from Favorites</button>
//             ) : (
//                 <button onClick={handleAddToFavorites}>Add to Favorites</button>
//             )}
//             <button onClick={handleRemoveClick}>Remove from Wishlist</button>
//         </div>
//     );
// }
//////////////////////
import React, { useState } from 'react';
import { BookProps } from '../BookList/Book';

type WishlistProps = {
    wishlistItems: BookProps[];
    book: BookProps;
    onRemove: (bookId: string) => void;
};


export function WishList({ wishlistItems, onRemove }: WishlistProps): JSX.Element {
    const [showFavorites, setShowFavorites] = useState(false);

    const handleShowFavoritesClick = () => {
        setShowFavorites(!showFavorites);
    };

    const handleRemoveClick = (bookId: string) => {
        onRemove(bookId);
    };

    const filteredList = showFavorites
        ? wishlistItems.filter((item) => item.isFavorite)
        : wishlistItems;

    return (
        <div>
            <h2>Wishlist</h2>
            <button onClick={handleShowFavoritesClick}>
                {showFavorites ? 'Show All Books' : 'Show Favorites'}
            </button>
            {filteredList.length > 0 ? (
                filteredList.map((item) => (
                    // <WishList key={item.id} book={item} onRemove={handleRemoveClick} />
                    <WishList book={item} onRemove={handleRemoveClick} wishlistItems={[]} />

                ))
            ) : (
                <p>No items in the wishlist</p>
            )}
        </div>
    );
}
