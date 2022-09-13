import React from "react";
import MenuCard from "./MenuCard";
import Burger1 from "../../assets/burger1.png";
import Burger2 from "../../assets/burger2.png";
import Burger3 from "../../assets/burger3.png";
const Menu = () => {
  const addToCartHandler = (itemNum) => {};
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={Burger1}
          price={12}
          title="cheese Burger"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={Burger2}
          price={16}
          title="cheese Burger Combo"
          handler={addToCartHandler}
          delay={0.5}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={Burger3}
          price={18}
          title="Cheese Burger Meal with Fries"
          handler={addToCartHandler}
          delay={0.8}
        />
      </div>
    </section>
  );
};

export default Menu;
