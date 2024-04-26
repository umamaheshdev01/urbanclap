'use client'
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar'
import '../../css/blog.css'
import BlogComponent from '../../components/BlogComponent';
import Link from 'next/link';
import '../../css/index.css'


import { createClient } from '@supabase/supabase-js'
import Footer from '@/app/components/Footer';
const supabaseUrl = 'https://xnpbgshwasrramtvbzgx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhucGJnc2h3YXNycmFtdHZiemd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5Nzk0MjEsImV4cCI6MjAyOTU1NTQyMX0.SLMupGKcXFpA9HXG_xgzLfgDHTqEKNUu77XBbHaNrds'
const supabase = createClient(supabaseUrl, supabaseKey)




function Page({params}) {

  const currentSlug = params.slug

  const [tagsData,setTag] = useState([])
  const [blogsData,setBlog] = useState([])


  useEffect(()=>{

    


    const fetchrey = async()=>{




      await supabase.from('Servicetype').select('*').then(({data})=>{
        
        const list  = []

        data?.forEach(element => {

          list.push(element.name)
          
        });

     

        setTag(list)

      })
    
    }

    fetchrey()

   

  },[])


  useEffect(()=>{
   
    const fukk = async ()=>{

      await supabase.from('services').select('*,Servicetype(*),Users(*)').then(({data})=>{
        
         const list2 = []

         data?.forEach((ele)=>{
             if(ele.Servicetype.name === currentSlug)
             {
                 list2.push(ele)
             }
         })

         console.log(list2)

         const list4 = []

         list2.forEach((ele)=>{
            
          list4.push({
            id : ele.id,
            imageUrl: ele.servicepicture,
    altText: capitalizeFirstLetter(ele.servicename),
    category: capitalizeFirstLetter(ele.Servicetype.name),
    author: capitalizeFirstLetter(ele.Users.username) ,
    title: capitalizeFirstLetter(ele.servicename),
    link: '/serve',

          })


          setBlog(list4)

         })

      })

    }

    fukk()

  },[])


   function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

 
  return (
    <>
      <Navbar />

      <section className='blog-list'>
        <div className="container">
          <h2>Our Services</h2>
          
     
     
      <div className="blog-tags blog-tags-container">
        {tagsData.map((tag, index) => (
          <Link href={`${tag}`} key={index}>
            <div
              className={currentSlug === tag ? 'tagf' : 'tag'}
            >
              <p>{capitalizeFirstLetter(tag)}</p>
            </div>
          </Link>
        ))}
      </div>
   




       <BlogComponent blogs={blogsData}></BlogComponent>




         









        </div>
      </section>

      <br></br>


      <section class="cta-callout">
      <div class="container">
        <div class="callout-copy">
          <h2>Secure confidential information</h2>
          <p>
            Mitigate data breach risks and achieve regulatory compliance
            effortlessly, bypassing conventional complexities.
          </p>
          <button><a href="./pricing.html">Begin Now</a></button>
        </div>
      </div>
    </section>



      <Footer></Footer>
    </>
  );
}

export default Page;
