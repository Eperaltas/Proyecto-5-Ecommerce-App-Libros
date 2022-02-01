import React from 'react';

import { useParams } from 'react-router-dom';

const Product = ({ books }) => {
  const { id } = useParams();
  const infoLibro = books[+id];
  console.log(JSON.stringify(infoLibro));
  return <div>
    <h1>{infoLibro.title}</h1>
    <img src={'img/' + infoLibro.image} />
  </div>
};

export default Product;
