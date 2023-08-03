import React from "react";
import css from "./CarItem.module.css";

function CarItem({ car }) {
  return (
    <div className={css.wrapper}>
      <div
        className={css.image}
        style={{ backgroundImage: `url(${car.image})` }}
      />

      <div className={css.info}>
        <h2> {car.name}</h2>
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(car.price)}
        </p>
        <button>Read more</button>
      </div>
    </div>
  );
}

export default CarItem;
