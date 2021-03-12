import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { theme } from "./styling/colorTheme";
import { BrowserRouter as Router } from "react-router-dom";
import ViewContainer from "./routes/ViewContainer";
import CartProvider from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <Router>
            <ViewContainer />
          </Router>
        </StylesProvider>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
