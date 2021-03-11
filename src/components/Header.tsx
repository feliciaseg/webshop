import { CSSProperties } from "@material-ui/styles";
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { theme } from "../styling/colorTheme";

interface Props {
    type: "transparent" | "white",

}

export default function Header(props: Props) {
   let bgColor: string;
   let textColor: string;

    if (props.type === "transparent") {
         bgColor = "transparent" 
         textColor = "disabled"
    } else {
      bgColor = "white"
      textColor = theme.palette.primary.main
    }


    return (
         <div style={{...headerStyling, backgroundColor: bgColor}}>
      
                <Link style={{textDecoration: 'none'}}to={{pathname: './'}}><h1 style={h1}>HEMMA</h1></Link>
                <Link style={{textDecoration: 'none'}}to={{pathname: './checkout' }}> 
                <ShoppingCartIcon type="textColor" />
               </Link>

     </div>
    )
}


const headerStyling: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '7rem',
    width: '100%', 


}

const h1: CSSProperties = {
    color: 'black',
}

