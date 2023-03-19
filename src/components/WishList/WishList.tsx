import React, { useState } from 'react';
// import { BookProps } from '../BookList/Book';

// type WishlistProps = {
//     wishlistItems: BookProps[];
//     onAddToWishlist: (bookId: string) => void;
// };

// export function WishList({ wishlistItems = [], onAddToWishlist }: WishlistProps): JSX.Element {

//     const [showFavorites, setShowFavorites] = useState(false);

//     const handleShowFavoritesClick = () => {
//         setShowFavorites(!showFavorites);
//     };

//     const handleRemoveClick = (bookId: string) => {
//         onAddToWishlist(bookId);
//     };


//     const filteredList = showFavorites
//         ? wishlistItems.filter((item) => item.isFavorite)
//         : wishlistItems;

//     return (
//         <div>
//             <h2>Wishlist</h2>
//             <button onClick={handleShowFavoritesClick}>
//                 {showFavorites ? 'Show All Books' : 'Show Favorites'}
//             </button>
//             {filteredList.length > 0 ? (
//                 filteredList.map((item) => (
//                     <div key={item.id}>
//                         <h3>{item.title}</h3>
//                         <p>Author: {item.author}</p>
//                         <button onClick={() => handleRemoveClick(item.id)}>Remove</button>
//                     </div>
//                 ))
//             ) : (
//                 <p>No items in the wishlist</p>
//             )}
//         </div>
//     );
// }
////////////////////////import React from "react";import React from "react";
import { useGlobalContext } from "../../context";


function WishList(): JSX.Element {
    const { wishlist, removeFromWishlist } = useGlobalContext(); // Destructure wishlist and removeFromWishlist from the context
    console.log('wishlist:', wishlist);


    const [showFavorites, setShowFavorites] = useState(false);

    const handleShowFavoritesClick = () => {
        setShowFavorites(!showFavorites);
    };

    const handleRemoveClick = (bookId: string) => {
        removeFromWishlist(bookId);
    };

    const filteredList = showFavorites
        ? wishlist.filter((item) => item.isFavorite)
        : wishlist;

    return (
        <div>
            <h2>Wishlist</h2>
            <button onClick={handleShowFavoritesClick}>
                {showFavorites ? 'Show All Books' : 'Show Favorites'}
            </button>
            {filteredList.length > 0 ? (
                filteredList.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>Author: {item.author_name.join(', ')}</p> {/* Update this line */}
                        <button onClick={() => handleRemoveClick(item.id)}>Remove</button>
                    </div>
                ))
            ) : (
                <p>No items in the wishlist</p>
            )}
        </div>
    );
}


export default WishList;
