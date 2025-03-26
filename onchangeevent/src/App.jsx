import React, {use, useState} from "react";

function MyComponent(){

    const [name, setName] = useState("Guest");

    const [quantity, setQuantity] = useState(1);

    const [comment, setComment] = useState("");

    const [payment, setPayment] = useState("");

    const [delivery, setDelivery] = useState("delivery");

    function handleNamechange(event){
        setName(event.target.value);
    };

    function handleQuantitychange(event){
      setQuantity(event.target.value);
    };

    function handleCommentchange(event){
      setComment(event.target.value);
    };

    function handlePaymentchange(event){
      setPayment(event.target.value);
    };

    function handleDeliverychange(event){
      setDelivery(event.target.value);
    };

    return(
        <>
            <div>
                <input value={name} onChange={handleNamechange} />
                <p>Name: {name}</p>

                <input value={quantity} onChange={handleQuantitychange} type="number"/>
                <p>Quantity: {quantity}</p>

                <textarea value={comment} onChange={handleCommentchange} placeholder="Enter delivery instructions:"></textarea>
                <p>Comment: {comment}</p>

                <select value={payment} onChange={handlePaymentchange}>
                  <option value="">Select an option</option>
                  <option value="visa">VISA</option>
                  <option value="mastercard">MASTERCARD</option>
                  <option value="blik">blik</option>
                </select>
                <p>PAYMENT: {payment}</p>

                <label>
                  <input type="radio" value="pickup" checked={delivery === "pickup"} onChange={handleDeliverychange}/>
                  pick Up
                </label>
                  <br></br>
                <label>
                <input type="radio" value="delivery" checked={delivery === "delivery"} onChange={handleDeliverychange}/>
                  Delivery
                </label>
                <p>shipping: {delivery}</p>
            </div>
        </>
    );

};

export default MyComponent