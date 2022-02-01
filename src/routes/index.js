import React from 'react';

import {Routes, route} from 'react-router-dom';

const index = () => (
  <Routes>
    <Route path='/home' element={<h1>Welcome</h1>} />
    </Routes>
)