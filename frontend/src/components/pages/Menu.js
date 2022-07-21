import React, { useState } from "react";
import "../../App.css";
import { MenuList } from "../../helpers/MenuList";
import MenuItem from "../MenuItem";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  const [menu, setMenu] = useState([]);

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "fe3d63acb5msh49f482a8fb5d88ep13585cjsn2a666c1cd4d7",
  //     "X-RapidAPI-Host": "pizza-and-desserts.p.rapidapi.com",
  //   },
  // };

  // fetch("https://pizza-and-desserts.p.rapidapi.com/pizzas", options)
  fetch("https://fakestoreapi.com/products")
    .then((data) => {
      //console.log(data);
      //data is in json formate , both the key n value is in double quotes
      //so we need to convert to object (javascript format?)
      return data.json();
    })
    .then((completedata) => {
      setMenu(completedata);
    });

  console.log(menu);

  return (
    <div className="menu">
      <h1 className="menuTitle">Menu</h1>
      <div className="menuList">
        {menu.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.title}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
