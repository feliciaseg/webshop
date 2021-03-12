import { CSSProperties } from "@material-ui/styles"

export default function HeroBanner() {
   
    return (
    <div style={heroDiv}>
        <img 
        style={imgStyle} 
        src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
        ></img>
     </div>
    )
}

const heroDiv: CSSProperties = {
    height: '20rem',
    marginTop: '-10rem',
  
}

const imgStyle: CSSProperties = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',    
}