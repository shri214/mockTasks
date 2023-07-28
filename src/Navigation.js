import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/Blog">Blog</NavLink>
      <NavLink to="/contact">contact</NavLink>
    </div>
  );
}

export default Navigation;

export const Home = () => {
  return <div>Home</div>;
};
export const Blog = () => {
  return <div>Blog</div>;
};
export const Contact = () => {
  return <div>contact</div>;
};
