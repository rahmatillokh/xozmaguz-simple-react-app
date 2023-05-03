import React from "react";
import { useLocation } from "react-router-dom";
import { styles } from "../utils/style";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer"

function Single() {
  const product = useLocation()?.state;

  return (
    <>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container} my-2`}>
          <Navbar />
        </div>
      </div>
      <div className={`aboutProduct flex md:flex-row flex-col justify-center items-center  ${styles.marginX} ${styles.marginY}`}>
        <div className="left">
          <img
            className="w-[300px] h-auto"
            src={product?.productImage}
            width={300}
            alt=""
          />
        </div>
        <div className="right max-w-xs">
          <p className={`${styles.headingText}`}>{product?.name}</p>
          <p className={`text-primary ${styles.paragraph}`}>{product?.description}</p>
          <p className={`${styles.paragraph} text-primary`}>{product?.date} kuni joylangan e'lon</p>
          <div className="btn flex items-center justify-between mt-5">
            <p className={`${styles.paragraph} text-primary font-semibold`}>{product?.cost}</p>
            <button className={`${styles.paragraph} bg-slate-400 w-32 h-10 rounded-2xl text-primary`}>Sotib olish</button>
          </div>
        </div>
      </div>

      <div className="params">
        <p className={`${styles.headingText1} text-center`}>Tovar haqida ma'lumotlar</p>
      </div>

      <div className={`bg-primary ${styles.paddingX}${styles.paddingY} ${styles.flexCenter}`}>
        <Footer />
      </div>
    </>
  );
}

export default Single;
