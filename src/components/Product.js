import React from 'react';

import { useParams } from 'react-router-dom';

const Product = ({ books }) => {
  const { id } = useParams();
  const infoLibro = books[+id];
  console.log(JSON.stringify(infoLibro));
  return <div>
    <h1>{infoLibro.title}</h1>

    <p>
      Lorem Ipsum
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
    </p>

    <img src={'img/' + infoLibro.image} />
  </div>
};

export default Product;
