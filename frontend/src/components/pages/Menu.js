import React from "react";
import "../../App.css";
import { MenuList } from "../../helpers/MenuList";
import MenuItem from "../MenuItem";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {/* menuitem represent each of the item in the MenuList
        we are going through each item in the list(MenuList) and grabbing the menuItem and its key. Afterwards we will return whatever we want for each item        */}
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
