import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../../context";
import Book, { BookProps } from '../BookList/Book';
import '../BookDetails/BookDetails.css';

function WishList(): JSX.Element {
    const { wishlist, removeFromWishlist } = useGlobalContext();
    console.log('wishlist:', wishlist);

    // const [showFavorites, setShowFavorites] = useState(false);
    const [showFavorites] = useState(false);

    // const handleShowFavoritesClick = () => {
    //     setShowFavorites(!showFavorites);
    // };

    const filteredList = showFavorites
        ? wishlist.filter((item) => item.isFavorite)
        : wishlist;

    return (
        <div>
            <h2>Wishlist</h2>

            {filteredList.length > 0 ? (
                filteredList.map((item, index) => {
                    const bookProps: BookProps = {
                        id: item.id,
                        cover_img: item.cover_img,
                        title: item.title,
                        author: item.author_name,
                        edition_count: item.edition_count,
                        first_publish_year: item.first_publish_year,
                        onAddToWishlist: () => removeFromWishlist(item.edition_count),
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
