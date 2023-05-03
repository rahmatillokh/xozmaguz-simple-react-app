import React from "react";
import { discount, homePhoto } from "../assets/assets";
import { styles } from "../utils/style";
import Button from "../jsx-components/button";

const Home = () => {
  return (
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        {/* Animation image */}
        <div className={`flex-1 ${styles.flexStart}: md:my-0 my-10 relative`}>
          <a href="#">
            <img
              src={homePhoto}
              alt="home-photo"
              className="w-[100%] h-[100%] relative z-10 rounded-3xl"
            />
          </a>
        </div>
        {/* Information */}
        <div
          className={`flex-1 ${styles.flexStart} xs:pt-5 md:pt-0 flex-col xl:px-0 sm:px-16 px-6`}
        >
          {/* Discount information */}
          <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient">
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
              Har bir sotib olingan <span className="text-white">mahsulot</span>{" "}
              uchun <span className="text-white ">KESHBEK</span>
            </p>
          </div>

          {/* Title */}
          <div className="w-full">
            <h1 className={`${styles.heading1}`}>
              Yagona, Ishonchli, <br />
              <span className="text-gradient">Universal Xozmag</span>
            </h1>
          </div>

          {/* Description */}

          <div className={`${styles.paragraph} mt-5 max-w-[500px]`}>
            Ushbu websayt foydalanuvchilarga oz mahsulotlarini sotishlari yoki
            sotib olishlari uchun yaqindan ko'mak beradi! Eslatib o'tamiz
            Platformada e'lon joylash bepul
          </div>
          <Button styles={"mt-3"} />
        </div>
      </section>
  );
};

export default Home;
