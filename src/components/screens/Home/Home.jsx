import React, { useState } from "react";

import CarItem from "../CarItem/CarItem";

import { cars as carsData } from "../CarItem/cars.data";
import CreateCardForm from "../CreateCardForm/CreateCardForm";

function Home() {
  const [cars, setCars] = useState(carsData);
  console.log(cars);

  return (
    <div>
      <h1>Cars Projects</h1>
      <CreateCardForm setCars={setCars} />
      {cars.length ? (
        cars.map((car) => <CarItem key={car.id} car={car} />)
      ) : (
        <p> There are no cars</p>
      )}
    </div>
  );
}

export default Home;
