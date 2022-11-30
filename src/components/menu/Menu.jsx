import React, { useState } from "react";
import './Menu.scss'
import { menuItems } from '../../menuItems'

function Menu() {

  const [search, setSearch] = useState('')

  const handleSizeClick = (e) => {
    e.preventDefault();
    const price = parseFloat(e.target.getAttribute('data-price'))
    let priceCalculated = e.target.parentElement.nextElementSibling.querySelector('.menu__item_price')
    let quantity = e.target.parentElement.nextElementSibling.querySelector('input')

    priceCalculated.setAttribute('data-price-single', price)
    priceCalculated.innerHTML = price * parseInt(quantity.value)
  }

  const handleQuantityIncrease = (e) => {
    e.preventDefault();
    const price = parseFloat(e.target.parentElement.parentElement.querySelector('.menu__item_price').getAttribute('data-price-single'))
    let priceWrapper = e.target.parentElement.parentElement.querySelector('.menu__item_price')
    let quantity = e.target.parentElement.querySelector('input')
    quantity.value = parseInt(quantity.value) + 1
    let priceCalculated = price * parseInt(quantity.value)
    priceWrapper.innerHTML = parseFloat(priceCalculated).toFixed(2)
  }

  const handleQuantityDecrease = (e) => {
    e.preventDefault();
    const price = parseFloat(e.target.parentElement.parentElement.querySelector('.menu__item_price').getAttribute('data-price-single'))
    let priceWrapper = e.target.parentElement.parentElement.querySelector('.menu__item_price')
    let quantity = e.target.parentElement.querySelector('input')
    if(quantity.value > 1) {
      quantity.value = parseInt(quantity.value) - 1
      let priceCalculated = price * parseInt(quantity.value)
      priceWrapper.innerHTML = parseFloat(priceCalculated).toFixed(2)
    }
  }


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
          <div className="menu__item" key={card.id}>
            <div className="menu__item_img">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="menu__item_text">
              <h5>{card.title}</h5>
              <p>{card.description}</p>
              <div className="sizes">{Object.keys(card.sizes).map((key, index) => {
                return (
                  <button key={index} className="size" onClick={handleSizeClick} data-price={card.sizes[key]}>{key}</button>
                )
              })}
              </div>
              <div className="menu__item_buy">
                <div className="menu__item_price" data-price-single={card.price}>{card.price}</div>
                <div className="menu__item_buy_quantity">
                  <button className="item_quantity --decrease" onClick={handleQuantityDecrease}></button>
                  <input type="text" value="1" readOnly />
                  <button className="item_quantity --increase" onClick={handleQuantityIncrease}></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;