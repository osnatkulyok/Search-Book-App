// import React from "react";
// import { useState } from "react";
// import { useGlobalContext } from "../../context";

// function WishList(): JSX.Element {
//     const { wishlist, removeFromWishlist } = useGlobalContext();
//     console.log('wishlist:', wishlist);

//     const [showFavorites, setShowFavorites] = useState(false);

//     const handleShowFavoritesClick = () => {
//         setShowFavorites(!showFavorites);
//     };

//     const handleRemoveClick = (bookId: string) => {
//         removeFromWishlist(bookId);
//     };

//     const filteredList = showFavorites
//         ? wishlist.filter((item) => item.isFavorite)
//         : wishlist;

//     return (
//         <div>
//             <h2>Wishlist</h2>
//             <button onClick={handleShowFavoritesClick}>
//                 {showFavorites ? 'Show All Books' : 'Show Favorites'}
//             </button>
//             {filteredList.length > 0 ? (
//                 filteredList.map((item, index) => (
//                     <div key={`${item.id}-${index}`}>
//                         <h3>{item.title}</h3>
//                         <p>Author: {item.author_name.join(', ')}</p>
//                         <button onClick={() => handleRemoveClick(item.id)}>Remove</button>
//                     </div>
//                 ))
//             ) : (
//                 <p>No items in the wishlist</p>
//             )}
//         </div>
//     );
// }

// export default WishList;
///////////////////////////////////////////////
import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../../context";
import Book, { BookProps } from '../BookList/Book';
import '../BookDetails/BookDetails.css';

function WishList(): JSX.Element {
    const { wishlist, removeFromWishlist } = useGlobalContext();
    console.log('wishlist:', wishlist);

    const [showFavorites, setShowFavorites] = useState(false);

    const handleShowFavoritesClick = () => {
        setShowFavorites(!showFavorites);
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
                filteredList.map((item, index) => {
                    const bookProps: BookProps = {
                        id: item.id,
                        cover_img: item.cover_img,
                        title: item.title,
                        author: item.author_name,
                        edition_count: item.edition_count,
                        first_publish_year: item.first_publish_year,
                        onAddToWishlist: () => removeFromWishlist(item.id),
                        isFavorite: true,
                        isWishlist: true,
                    };
                    return <Book key={`${item.id}-${index}`} {...bookProps} />;
                })
            ) : (
                <p>No items in the wishlist</p>
            )}
        </div>
    );
}

export default WishList;
