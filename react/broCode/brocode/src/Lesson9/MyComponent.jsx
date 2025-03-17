// onChange :- event handler used primarily with form elements 
// ex :- <input> <textarea> <select> <radio>
// triggers a function every time the value of the input change 


import React, {useState} from 'react';

function MyComponent(){
    
    const [name,setName] = useState("Guest");
    const [quantity,setQuantity] = useState(1);
    const [comment,setComment] = useState("");
    const [payment,setPayment] = useState("");
    const [shipping,setShipping] = useState("Pick up");

    const handleNameChange =(e)=>{
        setName(e.target.value);
    }

    const handleQuantityChange =(e)=> {
        setQuantity(e.target.value);
    }

    const handleCommentChange = (e)=>{
        setComment(e.target.value);
    }

    const handlePaymentChange = (e) => {
        setPayment(e.target.value);
    }

    const handleShippingChange = (e) => {
        setShipping(e.target.value);
    }

    return (<div className='container p-5'>
        <input type="text" value={name} onChange={(e)=> handleNameChange(e)} />
        <p>Name : {name}</p>
        <input type="number" value={quantity} onChange={(e)=>handleQuantityChange(e)} />
        <p>Number : {quantity}</p>

        <textarea value={comment} placeholder="Enter delivery Instruction"
        onChange={handleCommentChange}></textarea>
        <p>Comment : {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an Option</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="GiftCard">GiftCard</option>


        </select>
        <p>Payment : {payment}</p>

        <label>
            <input type="radio" value="Pick up"
            checked={shipping === "Pick up"}
            onChange={handleShippingChange}  />
            Pick up
        </label>
        <br />
        <label>
            <input type="radio" value="Delivery" 
            checked={shipping === "Delivery"}

        onChange = {handleShippingChange}/>
            Delivery
        </label>
        <p>Shipping : {shipping}</p>
    </div>);
}

export default MyComponent