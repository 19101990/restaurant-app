import React, { useState } from "react";
import './Menu.scss'
import { menuItems } from '../../menuItems'

function Menu() {
  // const cardInfo = [
  //   { image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Burger", description: "A huge burger, cheese, lettuce, tomato, onions or mayonnaise!" },
  //   { image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Red velvet", description: "Red Velvet Frappuccino, Menu Frappuccino recipe" },
  //   { image: "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Pasta", description: "Peri Peri pasta with pink sauce and white sauce" },
  //   { image: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Pizza", description: "Pizza Strip, Nutella Mousse, Pineapple Pizza, Oreo Delight" },
  //   { image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Samosa", description: "Chole samosa , Pasta samosa, Butter Samosa" },
  //   { image: "https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Alchol & Drinks", description: "Long Island Ice tea, Cocktails and Beverages" },
  //   { image: "https://images.pexels.com/photos/688804/pexels-photo-688804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Non-veg", description: "Grilled chicken with long mushrooms, chicken peri peri" },
  //   { image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Diet food", description: "Salad, Brown bread, Avacado, Diet coke" },
  // ];

  const [search, setSearch] = useState('')
  
  return (
    <div className="menu__container">
      <h2>Our menu</h2>
      <form className="menu__search">
        <input className="menu__search_field" type="text" placeholder="What are you looking for?" onChange={(event) => setSearch(event.target.value)} />
      </form>
      <div className="menu__wrapper">
        {menuItems.filter((card) => {
          return search.toLowerCase() === '' ? card : card.title.toLowerCase().includes(search)
        }).map((card) => (
          <div className="menu__item" key={card.title}>
            <div className="menu__item_img">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="menu__item_text">
              <h5>{card.title}</h5>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
