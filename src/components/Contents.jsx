import React, { useState } from "react";
import Cards from "./Cards";
import Menu from "./Menu";
import "../App.css";
import Navbar from "./Navbar";
const uniqueList = [
  ...new Set(
    Menu.map((value) => {
      return value.category;
    })
  ),
  "All",
];
console.log(uniqueList);

const Contents = () => {
  const [menu, setMenu] = useState(Menu);
  const [uniqueData, setUniqueData] = useState(uniqueList);
  console.log(menu);
  const filtering = (category) => {
    if (category === "All") {
      setMenu(Menu);
      return;
    }
    const updateList = Menu.filter((value) => {
      return value.category === category;
    });
    setMenu(updateList);
  };

  return (
    <>
      <Navbar filtering={filtering} uniqueData={uniqueData} />

      <Cards menu={menu} />
    </>
  );
};

export default Contents;
