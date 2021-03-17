import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { theme } from "./styling/colorTheme";
import { BrowserRouter as Router } from "react-router-dom";
import ViewContainer from "./routes/ViewContainer";
import CartProvider from "./contexts/CartContext";
import ProductProvider from "./contexts/ProductContext";
import ScrollToTop from "./components/ScrollToTop";
import { saveProductListToLocalStorage } from "./helper";

function App() {
  saveProductListToLocalStorage();
  return (
    <CartProvider>
      <ProductProvider>
        <ThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <Router>
              <ScrollToTop>
                <ViewContainer />
              </ScrollToTop>
            </Router>
          </StylesProvider>
        </ThemeProvider>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
