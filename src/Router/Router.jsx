import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CarDetail from "../components/screens/CarDetail/CarDetail";
import Home from "../components/screens/Home/Home";
import NotFound from "../components/NotFound/notFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CarDetail />} path="/car/:id" />

        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
