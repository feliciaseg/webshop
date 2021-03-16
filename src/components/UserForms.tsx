import { CSSProperties } from "@material-ui/styles"
import TextField from '@material-ui/core/TextField';



export default function UserForms() {
    return (
        <div style={container}>
            <h2>Dina uppgifter</h2>
           <div style={formContainer}>
           
            {/* <form style={formContainer}> 
            <TextField
            id="filled-secondary"
            label="Name"
            variant="filled"
            color= "secondary"
            />

        


            </form> */}

           </div>
        </div>

    
    )
}

const container: CSSProperties = {
  height: '100%',
    
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

const formContainer: CSSProperties = {
    height: '30rem',
    width: '25rem',
    background: '#F1F1F1',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

