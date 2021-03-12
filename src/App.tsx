import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styling/colorTheme";
import { BrowserRouter as Router } from "react-router-dom";
import ViewContainer from "./routes/ViewContainer";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Router>
          <ViewContainer />
        </Router>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
