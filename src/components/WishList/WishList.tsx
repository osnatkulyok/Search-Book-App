import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../../context";


function WishList(): JSX.Element {
    const { wishlist, removeFromWishlist } = useGlobalContext();
    console.log('wishlist:', wishlist); // This will print the wishlist to the console

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
                        <p>Author: {item.author_name.join(', ')}</p>
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
