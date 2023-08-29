import React from "react";
import { Link } from "react-router-dom";
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
        <Link className="btn" to={`/car/${car.id}`}>
          Read more
        </Link>
      </div>
    </div>
  );
}

export default CarItem;
