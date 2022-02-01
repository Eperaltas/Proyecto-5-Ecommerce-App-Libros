import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import Logout from '../components/Logout';
import Product from '../components/Product';

import List from '../List';
import Signup from '../Signup';
const RouterComponent = ({
  items,
  onremove,
  onupdaterating,
  setToken,
  copyBooks,
}) => (
  <Routes>
    <Route path='/' element={<Navigate to="/book" />} />
    <Route path='/login' element={<Signup type={false} setToken={setToken} />} />
    <Route path='/signup' element={<Signup type={true} setToken={setToken} />} />
    <Route path='/checkout' element={<h1>Aquí podrás visualizar los artículos que elegiste:</h1>} />
    <Route path='/profile' element={<h1>Aquí podras visualizar los datos que proporcionaste para tu registro:</h1>} />
    <Route path='/book/:id' element={<Product books={copyBooks} />} />
    <Route path='/book/' element={<List className="list" items={items} onremove={onremove} onupdaterating={onupdaterating} />} />
    <Route path='/logout' element={<Logout setToken={setToken} />} />
  </Routes>
)

export default RouterComponent;
