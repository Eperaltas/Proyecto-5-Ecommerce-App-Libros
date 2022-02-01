import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './Item.css';

function Item({ id, title, price, image, rating, onremove, onupdaterating }) {
    const navigate = useNavigate();
    const [infoLibro, setInfoLibro] = useState({
        title: '',
        price: '',
        image: '',
        rating: 1,
        stars: []
    });

    useEffect(() => {
        setInfoLibro({
            id,
            title,
            price,
            image,
            rating: parseInt(rating),
            stars: Array(parseInt(rating)).fill(1)
        });
    }, [])

    const handleRemove = (e) => {
        onremove(id);
    }

    const onChangeRating = (e) => {
        const rating = parseInt(e.target.value)
        setInfoLibro({
            ...infoLibro,
            rating: parseInt(e.target.value),
            stars: Array(parseInt(e.target.value)).fill(1)
        });

        onupdaterating({ id: infoLibro.id, title: infoLibro.title, price: infoLibro.title, image: infoLibro.image, rating: rating });
    }
    return (
        <div className="item">
            <div className="image"><img src={'img/' + infoLibro.image} width="100%" /></div>
            <div className="title">{infoLibro.title}</div>
            <div className="price">{infoLibro.price}</div>
            <div className="rating">
                <p>
                    {infoLibro.stars.map((x, index) =>
                        <img key={index} src={x.img} width='' />
                    )}
                </p>
                Cantidad
                <select value={infoLibro.rating} onChange={onChangeRating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="actions">
                <button onClick={() => navigate(`/book/${id}`)}>Reseña del libro</button>
                <button onClick={handleRemove}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default Item;