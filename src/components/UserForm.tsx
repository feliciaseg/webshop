import { 
    FormControl,
    TextField,
    Box,
} from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import { theme } from '../styling/colorTheme';

export default  function UserForm () {
 
    return (
        <Box className={"userBox"} style={box}>
            <FormControl>
                <TextField
                style={textField}
                id="name"
                autoComplete="name"
                placeholder="Namn"
                variant="outlined"
                className={"userInput"}
                required
                />
                <TextField
                style={textField}
                id="adress"
                autoComplete="address"
                placeholder="Adress"
                variant="outlined"
                className={"userInput"}
                required
                />
                <TextField
                style={textField}
                id="email"
                autoComplete="email"
                placeholder="Mail"
                variant="outlined"
                className={"userInput"}
                required
    
                />
                <TextField
                style={textField}
                id="tel"
                autoComplete="tel"
                placeholder="Telefonnummer"
                variant="outlined"
                className={"userInput"}
                required
                />     
            </FormControl>
        </Box>
    )
}


const textField: CSSProperties = {
    backgroundColor: theme.palette.secondary.main,
    margin: '2rem 1.5rem 0.3rem 1.5rem',
    
};

const box: CSSProperties = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',   
}