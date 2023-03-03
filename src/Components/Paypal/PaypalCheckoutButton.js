import { PayPalButtons } from "@paypal/react-paypal-js";
import React, { createRef } from "react";
import { useNavigate } from "react-router-dom";
import { CartState } from "../../Context/UseContext";

function PaypalCheckoutButton(props) {
  const ref = createRef();
  const { modal, totalPrice } = props;
  const {
    state: { theme },
    dispatch,
  } = CartState();
  const navigate = useNavigate();

  const PaypalButton = React.forwardRef((props, ref) => (
    <div style={{ width: "40%" }} ref={ref}>
      {props.children}
    </div>
  ));
  return (
    <PaypalButton ref={ref}>
      <PayPalButtons
        style={{
          layout: "vertical",
          color: theme === "light" ? "gold" : "blue",
          shape: "pill",
          label: "installment",
          MX: 3,
        }}
        createOrder={(data, actions, err) => {
          return (
            data,
            actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "EUR",
                    value: totalPrice,
                  },
                },
              ],
            })
          );
        }}
        onApprove={async (data, actions) => {
          await actions.order.capture();
          dispatch({ type: "CLEAR_CART" });
          navigate("/georgien_vins");
          modal(false);
        }}
        onError={(err) => {
          modal(false);
          navigate("/error");
        }}
      />
    </PaypalButton>
  );
}

export default PaypalCheckoutButton;
