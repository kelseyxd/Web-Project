import React, { useEffect, useRef } from "react";

function Paypal(props) {
  const paypal = useRef();
  useEffect(() => {
    // default implementation for every paypal implementation
    // window is the DOM
    // object is between 2 curly braces
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: "SGD",
                  value: props.finalprice,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div>
      {/* use ref to get button from paypal script in html */}
      <div ref={paypal}></div>
    </div>
  );
}

export default Paypal;
