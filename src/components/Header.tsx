import { AppBar, Toolbar } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import { Link } from "react-router-dom";





export default function Header() {
    return (

        <header style={headerStyling}>
         <AppBar position="fixed">
            <Toolbar>
            <Link to={{pathname: "./StartPage"}}><h1>Hem</h1></Link>
            </Toolbar>
        </AppBar>


        </header>
    )
}

const headerStyling: CSSProperties = {
}