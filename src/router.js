import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/Home";

const Router = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
  </BrowserRouter>
);

export default Router;
