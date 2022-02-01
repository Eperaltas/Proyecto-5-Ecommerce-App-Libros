import React from 'react';
import Menu from '../Menu';
const Layout = ({
  children,
  title,
  onsearch,
  token
}) => (
  <div>
    <Menu title={title} onsearch={onsearch} token={token} />
    {children}
  </div>
);

export default Layout;
