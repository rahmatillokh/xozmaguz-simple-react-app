import React from "react";
import "./products.css";
import { styles } from "../utils/style";
import { data } from "./product-data";
import { Link } from "react-router-dom";
import Single from "../singleRouter/Single";

const Products = () => {
  return (
    <div className="app" id="product">
      <h1 className={`${styles.heading} text-header cursor-pointer `}>
        Mahsulotlar
      </h1>
      <div className="products flex-1 flex xs:flex-row flex-wrap flex-col justify-around items-center">
        {data.map((product) => {
          return (
            <Link to={`/product/${product.id}`} state={product}>
              <div className={`product`} key={product.id}>
                <div className="img">
                  <img
                    src={product.productImage}
                    className={``}
                    alt=""
                    height={200}
                    width={200}
                  />
                </div>
                <h3 className="product-name">
                  Mahsulot: <span className="">{product.name}</span>
                </h3>
                <p className="product-date">
                  E'longa joylangan sanasi: {product.date}
                </p>
                <div className="flex items-center justify-between">
                  <p className="product-cost">Narxi: {product.cost}</p>
                  <button className="addToCart">Batafsil</button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
