import fetch from 'node-fetch';


const version = 'v18.0';

const wabaid = "540090042521335";
const CreditLineID = "3396418340473055";

const url = `https://graph.facebook.com/${version}/${CreditLineID}/whatsapp_credit_sharing_and_attach?waba_id=${wabaid}&waba_currency=INR`;


fetch(url,{
    method : "POST",
    headers : {
        'Authorization' : `Bearer EAAGdfctNLQUBO4TwNYzkN2lh5ZBwEfxv6q1hZCUSwyi1tgOoC93gUHk2GXkS4YZCxhPxUiNPYRq5t1NChTQG9N5mPYj347tnubqaL4oMHwghx2ROlS4aYBaM1P1yh9fEWimkKrz2y3dXNSNvNB7QBYEazJXdR3EHMqDrUKbPFGrRrgRMGwveAKWk7oAWIUUDgZDZD`,
        'Content-Type' : 'application/json'

    }
}).then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log("error" + error));