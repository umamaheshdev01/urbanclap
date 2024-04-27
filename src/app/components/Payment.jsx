


'use client'
import React from 'react'

const Payment = ({cost,k}) => {

    


    const makePayment = async () => {

         

    
        const res = await initializeRazorpay();
        if (!res) {
          alert("Razorpay SDK Failed to load");
          return;
        }
      
        const data = await fetch("/api/razor",
        {
             method: "POST",
             headers: {
                'Content-Type': 'application/json',
            },
             body: JSON.stringify({
                amount:cost*100
             })
         }
        )
        .then((t) =>
          t.json()
        );

        

        var options = {
          key: 'rzp_test_8wkQ9ahelJ2qpZ', 
          name: "ServiceXpress",
          currency: 'INR',
          amount: cost * 100,
          order_id: data.data.id,
          description: "Thankyou for your test donation",
          image: "https://manuarora.in/logo.png",
          handler: async function (response) {

            const datapack = {

                customer_name : localStorage.getItem('username'),
                user_email : localStorage.getItem('email'),
                service_name : k.name,
                service_email : k.email,
                order_id : data.data.id,
                date : new Date(),
                expected_time : '2 hours',
                address : localStorage.getItem('address'),
                service_person : k.person,
                price : cost,
                service_description : k.description

            }

            fetch("/api/verify",
           {
             method: "POST",
             headers: {
                'Content-Type': 'application/json',
            },
             body: JSON.stringify(datapack)
            }
        )
  
            alert("Order Successful");
   
          },
          prefill: {
            name:"ServiceXpress",
            email:"admin@indradhanu.online",
            contact:'9853785519'

          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };
      const initializeRazorpay = () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";

          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };

          document.body.appendChild(script);
        });
      }
  return (
    <div>
       <button onClick={()=>makePayment()} style={{background:'black',color:'white',position:'relative',left:'-6px',top:'-10px'}}>Book -  ₹ {cost}</button>

    </div>
  )
}


export default Payment
