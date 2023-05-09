import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { cartContext } from "../../Contexts/Contexts";

import "./_ProductItem.scss";

export default function ProductItem(props) {
  const [isShowOptions, setIsShowOptions] = useState(false);

  const context = useContext(cartContext);
  const [isSelected, setIsSelected] = useState(false);

  const addToCartHandler = () => {
    if (!isSelected) {
      context.setValue((prev) => prev + 1);
      setIsSelected(true);
    }
  };

  return (
    <div
      className="product-container"
      onMouseMove={() => setIsShowOptions(true)}
      onMouseLeave={() => setIsShowOptions(false)}
      onClick={() => setIsShowOptions(true)}
    >
      <div className="product">
        <Link to={props.path} className="img-product link">
          <img className="img-fluid" src={props.img} alt={props.name} />
          {props.discount ? (
            <span className="status">{props.discount}%</span>
          ) : (
            <span className="status hide"> 0 % </span>
          )}
        </Link>
        <div className="p-3 text-center">
          <h3>
            <Link to="#" className="link text">
              {props.name}{" "}
            </Link>
          </h3>
          <div className={`pricing ${isShowOptions ? "hide-options" : ""}`}>
            <p className="price">
              {props.discount ? (
                <>
                  <span className="price-dc line-throw">${props.price}</span>
                  <span className="price-sale">
                    ${(props.price * (100 - props.discount)) / 100}
                  </span>
                </>
              ) : (
                <span className="price-dc">${props.price}</span>
              )}
            </p>
          </div>
          <div
            className={`icon-container ${!isShowOptions ? "hide-options" : ""}`}
          >
            <Link to={props.path}>
              <MenuIcon className="icon" />
            </Link>
            <Link to="wishlist">
              <FavoriteIcon className="icon" />
            </Link>
            <Link to="">
              <ShoppingCartIcon className="icon" onClick={addToCartHandler} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
