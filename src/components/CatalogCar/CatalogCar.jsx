import React from "react";
import CarItem from "../screens/CarItem/CarItem";

const CatalogCar = ({ cars }) => {
  return (
    <>
      {cars.length ? (
        cars.map((car) => <CarItem key={car.id} car={car} />)
      ) : (
        <p> There are no cars</p>
      )}
    </>
  );
};

export default CatalogCar;
