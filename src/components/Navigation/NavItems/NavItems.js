import React from "react";

import NavItem from "../NavItem/NavItem";

import "./NavItems.css";

const NavItems = (props) => {
  return (
    <ul className="nav-items">
      <NavItem link="/">خانه</NavItem>
      <NavItem link="/account">حساب کاربری</NavItem>
    </ul>
  );
};

export default NavItems;
