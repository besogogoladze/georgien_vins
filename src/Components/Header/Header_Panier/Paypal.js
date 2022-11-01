import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartState } from "../../../Context/UseContext";
import "../../../App.css"

export default function Paypal({ totalPrice, modal }) {
  const { dispatch } = CartState();
  const paypal = useRef();
  const navigate = useNavigate();

  const completedPayment = async (event) => {
    try {
      await dispatch({ type: "CLEAR_CART" });
      navigate("/georgien_vins");
      modal(false);
    } catch (error) {
      navigate("/error", { state: { message: "Failed to submit form" } }); // Pass optional second argument
    }
  };

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
          const order = await actions.order.capture();
          console.log(order);
          order.status === "COMPLETED" ? completedPayment() : <div>error</div>;
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal} id="paypal"></div>
    </div>
  );
}
