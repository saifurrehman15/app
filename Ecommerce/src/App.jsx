import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const cards = [
    {
      category: "Men's Clothing",
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description: `Slim-fitting style, contrast raglan long sleeve, three-button henley placket.`,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      category: "Men's Clothing",
      title: "Mens Cotton Jacket",
      price: 55.99,
      description: `great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.`,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      category: "Men's Clothing",
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description: `great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.`,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      category: "Men's Clothing",
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description: `great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.`,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      category: "Electronics",
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      price: 64,
      description: `USB 3.0 and USB 2.0 Compatibility Fast data transfers.`,
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    {
      category: "Electronics",
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description: `Easy upgrade for faster boot up, shutdown, application load.`,
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    },
    {
      category: "Electronics",
      title: "Silicon Power 256GB SSD 3D NAND A55 SLC",
      price: 109,
      description: `3D NAND flash are applied to deliver high transfer speeds.`,
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    },
    {
      category: "Electronics",
      title: "WD 4TB Gaming Drive Works with Playstation 4",
      price: 114,
      description: `Expand your PS4 gaming experience, Play anywhere Fast and easy, setup.`,
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    },
  ];

  return (
    <div className="row">
      <h1>MENS CLOTHES</h1>
      <div className="row-1">
        {cards.map((elem, index) =>
          elem.category == "Men's Clothing" ? (
            <div className="cards" key={index}>
              <div className="image-area">
                <img src={elem.image} alt="image" height={20} />
              </div>
              <div className="title">
                <h3>{elem.title}</h3>
              </div>
              <div className="description">
                <p>{elem.description} </p>
              </div>
              <div className="price-and-btn">
                <div className="price">
                  <p>${elem.price}</p>
                </div>
                <div className="button">
                  <button>
                    Add to Card{" "}
                    <span className="btn">
                      <i class="fa-solid fa-cart-shopping"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>

      <div className="row">
        <h1>ELECTRONICS</h1>
        <div className="row-1">
          {cards.map((elem, index) =>
            elem.category == "Electronics" ? (
              <div className="cards" key={index}>
                <div className="image-area">
                  <img src={elem.image} alt="image" height={20} />
                </div>
                <div className="title">
                  <h3>{elem.title}</h3>
                </div>
                <div className="description">
                  <p>{elem.description} </p>
                </div>
                <div className="price-and-btn">
                  <div className="price">
                    <p>${elem.price}</p>
                  </div>
                  <div className="button">
                    <button>
                      Add to Card{" "}
                      <span className="btn">
                        <i class="fa-solid fa-cart-shopping"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
