import { Route, Switch } from "react-router-dom";
import ModalProvider from "../contexts/ModalContext";
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
      <ModalProvider>
        <Route exact path="/admin" component={AdminPage} />
      </ModalProvider>
      <h2> Page not found </h2>
    </Switch>
  );
}
