import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartState } from "../../../Context/UseContext";
import "../../../App.css";

export default function Paypal({ totalPrice, modal }) {
  const { dispatch } = CartState();
  const paypal = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "EUR",
                  value: totalPrice,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          await actions.order.capture();
          dispatch({ type: "CLEAR_CART" });
          navigate("/georgien_vins");
          modal(false);
        },
        onError: (err) => {
          modal(false);
          navigate("/error", { state: { message: "Failed to submit form" } });
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [dispatch, modal, navigate, paypal, totalPrice]);
  console.log(paypal.current);

  return (
    <div>
      <div style={{ textAlign: "center" }} ref={paypal} id="paypal"></div>
    </div>
  );
}
