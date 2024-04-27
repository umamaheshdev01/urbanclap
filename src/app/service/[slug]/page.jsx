'use client'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React, { useEffect, useState } from 'react'
import '../../css/sample-blog.css'
import '../../css/blog.css'
import '../../css/index.css'
import Link from 'next/link'


import { createClient } from '@supabase/supabase-js'
import Payment from '@/app/components/Payment'
const supabaseUrl = 'https://xnpbgshwasrramtvbzgx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhucGJnc2h3YXNycmFtdHZiemd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5Nzk0MjEsImV4cCI6MjAyOTU1NTQyMX0.SLMupGKcXFpA9HXG_xgzLfgDHTqEKNUu77XBbHaNrds'
const supabase = createClient(supabaseUrl, supabaseKey)





function page({params}) {

    const [data,setData] = useState({
    
})

        function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)}

  useEffect(()=>{

    const code = params.slug

    const fetchData = async ()=>{
         
        await supabase.from('services').select('*,Users(*),Servicetype(*)').eq('id',code).then(({data})=>{
            const dum = data[0]

       

    const datapacks = {

    name : capitalizeFirstLetter(dum.servicename),
    img : dum.servicepicture,
    type : capitalizeFirstLetter(dum.Servicetype.name),
    person : capitalizeFirstLetter(dum.Users.username),
    description : dum.description,
    cost : dum.cost,
    email : dum.Users.email

            }


   setData(datapacks)

        })

        
    }

    fetchData()

  },[])

  return (
    <>
   <Navbar>
   </Navbar>


  <section class="sample-blog">
      <div class="container">

        
        <div class="s-b-copy">
         
          <h2>{data.name}</h2>

          <img style={{borderRadius :"2%",height:'22rem'}}
            src={data.img}
            alt={data.name}
          />

          <div class="s-b-info">
            <div class="blog-main-author">
              <p>By <i class="ph-fill ph-shield-check"></i> {data.person}</p>
              
      <br></br>
<Payment cost={data.cost} k={data}></Payment>

            </div>
            <div class="tag">
              <p>{data.type}</p>
               <i class="ph-fill ph-star"></i>
      <i class="ph-fill ph-star"></i>
      <i class="ph-fill ph-star"></i>
      <i class="ph-fill ph-star"></i>
      <i class="ph-fill ph-star-half"></i>
      <p style={{display:'inline'}}> 4.5</p>

            </div>
           


          </div>

          <div class="divider"></div>

          <p>
            {data.description}
          </p>

          

    <h3>How it works</h3>

          <img className='alexa' src='https://xnpbgshwasrramtvbzgx.supabase.co/storage/v1/object/public/servicepics/how%20it%20works.jpg'></img>

     
      
      

         
        </div>
      </div>
    </section>



   <Footer></Footer>

    </>
  )
}

export default page