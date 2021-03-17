import {
    FormControl,
    TextField,
    Box,
} from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import { theme } from '../styling/colorTheme';


export default function UserForm() {
   
    return (
        <Box className={"userBox"} style={box}>
            <FormControl>
                <TextField
                    inputProps= {{autoComplete: "name" }}
                    style={textField}
                    id="name"
                    placeholder="Namn"
                    variant="outlined"
                    className={"userInput"}
                    required
                    // error
                    // helperText="Fyll i namn"
                />
                <TextField
                    style={textField}
                    inputProps= {{autoComplete: "address"}}
                    id="address"
                    placeholder="Adress"
                    variant="outlined"
                    className={"userInput"}
                    required
                />
                <TextField
                    style={textField}
                    inputProps= {{ autoComplete: "email"}}
                    id="email"
                    placeholder="Mail"
                    variant="outlined"
                    className={"userInput"}
                    required
                    // error
                    // helperText="fyll i"

                />
                <TextField
                    style={textField}
                    id="phone"
                    placeholder="Telefonnummer"
                    variant="outlined"
                    className={"userInput"}
                    required
                    inputProps= {{ autoComplete: "phone"}}
                    
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