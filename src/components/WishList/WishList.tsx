import React, { useState } from 'react';
import { BookProps } from '../BookList/Book';

type WishlistItemProps = {
    book: BookProps;
    onRemove: (bookId: string) => void;
};

export function WishList({ book, onRemove }: WishlistItemProps): JSX.Element {
    const [favorites, setFavorites] = useState<BookProps[]>([]);

    const { id, title, author, cover_img } = book ?? {};

    const handleRemoveClick = () => {
        onRemove(id);
    };

    const handleAddToFavorites = () => {
        setFavorites([...favorites, book]);
    };

    const handleRemoveFromFavorites = () => {
        const filteredFavorites = favorites.filter((favorite) => favorite.id !== id);
        setFavorites(filteredFavorites);
    };

    const isFavorite = favorites.some((favorite) => favorite.id === id);

    return (
        <div className="wishlist-item" style={{ backgroundColor: 'black' }}>
            <img src={cover_img} alt={title} />
            <div className="wishlist-item-details">
                <h3>{title}</h3>
                {author && <p>By: {author.join(', ')}</p>}
            </div>
            {isFavorite ? (
                <button onClick={handleRemoveFromFavorites}>Remove from Favorites</button>
            ) : (
                <button onClick={handleAddToFavorites}>Add to Favorites</button>
            )}
            <button onClick={handleRemoveClick}>Remove from Wishlist</button>
        </div>
    );
}
