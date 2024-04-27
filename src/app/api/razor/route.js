import { NextResponse } from "next/server"
import Razorpay from "razorpay"


export const POST = async(req,res)=>{

    const datak = await req.json()
    const money = datak.amount

var instance = new Razorpay({
  key_id: 'rzp_test_8wkQ9ahelJ2qpZ',
  key_secret: 'WbqILav8UJGSHpaL69PzEoV9',
});

var options = {
  amount: Number(money),  
  currency: "INR",
  receipt: "uma11"
};

const order = await instance.orders.create(options)


    
    return NextResponse.json({data:order},{status:200})
}
