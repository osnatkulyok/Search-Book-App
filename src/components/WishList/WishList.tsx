
import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../../context";
import Book, { BookProps } from '../BookList/Book';
import './WishList.css'

function WishList(): JSX.Element {
    const { wishlist, removeFromWishlist } = useGlobalContext();
    console.log('wishlist:', wishlist);

    const [showFavorites] = useState(false);

    const filteredList = showFavorites
        ? wishlist.filter((item) => item.isFavorite)
        : wishlist;

    return (
        <div className="booklist">
            <h2>Wishlist</h2>
            <div className="booklist-content">

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
                        return (
                            <div key={`${item.id}-${index}`}>
                                <Book {...bookProps} />
                            </div>
                        );
                    })
                ) : (
                    <p>No items in the wishlist</p>
                )}
            </div>
        </div>
    );
}

export default WishList;
