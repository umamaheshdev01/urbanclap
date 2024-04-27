import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export const POST = async (req, res) => {

    const data = await req.json()


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'servicexpress23@gmail.com',
            pass: 'gnrgxilpnenvreev'
        }
    });
   
    //seller
    const info = await transporter.sendMail({
        from: 'ServiceXpress <info@servicexpress.co.in>',
        to: `${data.service_email}`,
        subject: "New Order",
        text: "New Order",
        html: `
         
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <p>Dear ${data.service_person},</p>
  <p>I hope this email finds you well.</p>
  <p>I'm writing to inform you that a new order has been assigned to you. Your expertise and dedication are invaluable to us, and we trust that you will handle this assignment with the same level of professionalism and attention to detail as always.</p>
  <p>Here are the details of the order:</p>
  <ul style="list-style-type: none; padding: 0;">
    <li><strong>Order Number:</strong> ${data.order_id}</li>
    <li><strong>Brief Description:</strong> ${data.service_description}</li>
    <li><strong>Deadline:</strong> ${data.expected_time}</li>
  </ul>
  <p>Please review the order details carefully and let me know if you have any questions or need any further clarification. Your timely action and commitment to excellence are greatly appreciated.</p>
  <p>Thank you for your hard work and dedication to our team. We know we can count on you to deliver outstanding results.</p>
  <p>Best Regards,</p>
  <p><strong>K.Hitesh</strong><br>
  <em>Marketing department</em></p>
  <p><a href="mailto:info@servicexpress.co.in">info@servicexpress.co.in</a></p>
</div>


        
        `,
    });
    
    //customer
    const info2 = await transporter.sendMail({
        from: 'servicexpress23@gmail.com',
        to: `${data.user_email}`,
        subject: "Order placed",
        text: "Order placed",
        html: `
        
         <div>
         <p>Dear ${data.customer_name},</p>
    <p>We are delighted to inform you that your service order has been successfully placed with <strong>ServiceXpress</strong>. We appreciate your trust in us and are committed to providing you with top-notch service.</p>
    
    <p>We are also pleased to announce that your service order will be handled by our experienced and dedicated worker, <strong>${data.service_person}</strong>. With their expertise and attention to detail, we are confident that your requirements will be met with precision and care.</p>
    
    <p>Here are the details of your service order:</p>
    
    <ul>
      <li><strong>Order Number:</strong> ${data.order_id}</li>
      <li><strong>Date of Order:</strong> ${data.date}</li>
      <li><strong>Service Description:</strong> ${data.service_description}</li>
      <li><strong>Worker Assigned:</strong> ${data.service_person}</li>
      <li><strong>Expected Completion Time:</strong>${data.expected_time}</li>
    </ul>
    
    <p>If you have any questions or need further assistance regarding your service order, please don't hesitate to reach out to us. We are here to ensure your satisfaction every step of the way.</p>
    
    <p>Thank you once again for choosing <strong>ServiceXpress</strong>. We look forward to exceeding your expectations with our service.</p>
    
    <p>Best Regards,</p>
    <p><strong>Hitesh K</strong><br>
    <strong>Marketing Executive</strong><br>
    <strong>ServiceXpress</strong><br>
      <p><a href="mailto:info@servicexpress.co.in">info@servicexpress.co.in</a></p>
  </div>
        
        
        `,
    });

    return NextResponse.json({ data: 1 }, { status: 200 });
};


