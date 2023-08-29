import React from "react";
import { Link, useParams } from "react-router-dom";
import CarItem from "../CarItem/CarItem";

function CarDetail() {
  const { id } = useParams();
  return (
    <div>
      <Link className="btn" to="/">
        Back
      </Link>
      <CarItem car={id} />
    </div>
  );
}

export default CarDetail;
