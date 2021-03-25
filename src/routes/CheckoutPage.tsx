import { Box, Button } from "@material-ui/core";
import { CSSProperties, useContext, useState, useEffect } from "react";
import DeliveryForm, { DeliveryInfo } from "../components/DeliveryForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UserForm, { UserInfo } from "../components/UserForm";
import PaymentForm, { PaymentInfo } from "../components/PaymentForm";
import CartView from "../components/CartView";
import OrderConfirmationModal from "../components/OrderConfirmationModal";
import { CartContext } from "../contexts/CartContext";
import SubTotal from "../components/SubTotal";
import { Order, sendOrderToApi } from "../mockedAPI";


export interface Validation {
  cartValidation: boolean;
  paymentValidation: boolean;
  userValidation: boolean;
  deliveryValidation: boolean;
}

export default function CheckoutPage() {
  const cartContext = useContext(CartContext);
  const [cart] = useState([...cartContext.cart]);
  const [totalPriceOfCart] = useState(cartContext.getTotalPriceOfCart);
  const [user, setUser] = useState<UserInfo>({});
  const [payment, setPayment] = useState<PaymentInfo>({});
  const [delivery, setDelivery] = useState<DeliveryInfo>({});
  const [disabled, setDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showSubTotal, setShowSubTotal] = useState(false);
  const [validation, setValidation] = useState<Validation>({
    cartValidation: Boolean(cartContext.cart.length),
    paymentValidation: false,
    userValidation: false,
    deliveryValidation: false,
  });

  const handleClick = async () => {
    const order: Order = {
      cart: cartContext.cart,
      user: user,
      payment: payment,
      delivery: delivery,
    }
    
    setDisabled(true);
    await sendOrderToApi(order)
    setDisabled(false);
    setShowModal(true);
    cartContext.emptyCart();
  };

  useEffect(() => {
    setValidation({
      ...validation,
      cartValidation: Boolean(cartContext.cart.length),
    });
  }, [cartContext]);

  useEffect(() => {
    if (
      validation.cartValidation === true &&
      validation.paymentValidation === true &&
      validation.userValidation === true &&
      validation.deliveryValidation === true 
    ) {
      setDisabled(false);
      setShowSubTotal(true);
    }
  }, [validation]);

 

  return (
    <>
      <OrderConfirmationModal
        display={showModal}
        products={cart}
        name={user.name}
        totalCost={delivery.price! + totalPriceOfCart}
      />
      <Header type="white" />
      <Box className="paddingContainer" style={checkoutContainer}>
        <form>
          <CartView />
          <div style={formContainer}>
            <p style={heading}>Dina Uppgifter</p>
            <UserForm
              user={user}
              setUser={setUser}
              validation={validation}
              setValidation={setValidation}
            />
          </div>
          <div style={formContainer}>
            <p style={heading}>Betalsätt</p>
            <PaymentForm
              userPhone={user.phone}
              payment={payment}
              setPayment={setPayment}
              validation={validation}
              setValidation={setValidation}
            />
          </div>
          <div style={formContainer}>
            <p style={heading}>Fraktsätt</p>
            <DeliveryForm
              delivery={delivery}
              setDelivery={setDelivery}
              validation={validation}
              setValidation={setValidation}
            />
          </div>
          <SubTotal
            products={cartContext.cart}
            display={showSubTotal}
            totalCost={delivery.price! + cartContext.getTotalPriceOfCart()}
            momsResoult ={cartContext.getTotalPriceOfCart() * 0.25}
            deliveryPrice = {delivery.price}
            
          />
          <Button
            variant="contained"
            color="primary"
            style={confirmationButton}
            disabled={disabled}
            onClick={handleClick}
          >
            Slutför köp
          </Button>
        </form>
      </Box>
      <Footer />
    </>
  );
}

const checkoutContainer: CSSProperties = {
  display: "flex",
  flex: 1,
  margin: "auto",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  maxWidth: "41rem",
};

const formContainer: CSSProperties = {
  width: "100%",
  padding: "1rem 0",
};

const heading: CSSProperties = {
  margin: "1rem 0 1.5rem 0",
  textAlign: "center",
};

const confirmationButton: CSSProperties = {
  width: "100%",
  fontWeight: 600,
  borderRadius: 0,
  marginTop: "1rem",
};
