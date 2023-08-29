import React, { useState, useContext } from "react";
import { AuthContext } from "../../../provaiders/AuthProvaider";

import CatalogCar from "../../CatalogCar/CatalogCar";
import CreateCardForm from "../CreateCardForm/CreateCardForm";

import { cars as carsData } from "../CarItem/cars.data";

function Home() {
  const [cars, setCars] = useState(carsData);
  const { user, setUser } = useContext(AuthContext);

  return (
    <div>
      <h1>Cars Projects</h1>
      {user ? (
        <>
          <h2 className="Name ">
            Welcome {user.name}!
            <button className="btn" onClick={() => setUser(null)}>
              {" "}
              Logout
            </button>
          </h2>
        </>
      ) : (
        <button className="btn" onClick={() => setUser({ name: "Sergii" })}>
          Login
        </button>
      )}
      <CreateCardForm setCars={setCars} />
      <CatalogCar cars={cars} />
    </div>
  );
}

export default Home;
