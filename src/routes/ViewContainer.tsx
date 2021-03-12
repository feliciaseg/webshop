import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminPage from "./AdminPage";
import CheckoutPage from "./CheckoutPage";
import ProductPage from "./ProductPage";
import StartPage from "./StartPage";

export default function ViewContainer() {
  return (
    <Switch>
      <Route exact path="/" component={StartPage} />
      <Route exact path="/products/:id" component={ProductPage} />
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route exact path="/admin" component={AdminPage} />
      <h2> Page not found </h2>
    </Switch>
  );
}
