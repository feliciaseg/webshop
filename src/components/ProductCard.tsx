import { CSSProperties } from "@material-ui/styles";

interface Props {
  imageUrl: string;
  name: string;
  price: number;
}

export default function productCard(props: Props) {
  return (
    <div style={productContainer}>
      <div style={imageContainer}>
        <img
          style={productImage}
          src="https://assets.ellosgroup.com/i/ellos/b?$eg$&$emr$&$ep$&$ed$&n=ell_1520526_De_01&mw=750&rw=750&qlt=80"
        ></img>
      </div>
      <div style={productDescription}>
        <h2 style={productName}>Fondi golvlampa</h2>
        <p style={productPrice}>949 kr</p>
      </div>
    </div>
  );
}

const productContainer: CSSProperties = {
  width: "100%",
  height: "20rem",
};

const imageContainer: CSSProperties = {
  width: "100%",
  height: "75%",
};

const productImage: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
};

const productDescription: CSSProperties = {
  padding: "1rem 0",
};

const productName: CSSProperties = {
  margin: 0,
  fontSize: "1.4rem",
  fontWeight: 400,
};

const productPrice: CSSProperties = {
  marginTop: "0.5rem",
  fontSize: "1rem",
  fontWeight: 700,
};
