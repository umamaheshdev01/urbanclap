import React from 'react';
import Navbar from '../../components/Navbar'
import '../../css/blog.css'
import BlogComponent from '../../components/BlogComponent';
import Link from 'next/link';


const tagsData = ['Compliance', 'Encryption', 'News', 'Highlights', 'Security'];




const blogsData = [
  {
    imageUrl:
      'https://assets.website-files.com/64bec233ea9c3e4f5dda1080/64c2fd903b98e1ea07b956ce_456%20x%20288%20(x2).png',
    altText: 'Automatic Failover Importance',
    category: 'Technology',
    author: 'Ryan Hausar',
    title: 'The Essentials of Automatic Failover',
    link: './sample-blog.html',
  },
  {
    imageUrl:
      'https://assets.website-files.com/64bec233ea9c3e4f5dda1080/64c300012dbd6912c693d224_456%20x%20288%20(x2).png',
    altText: 'Cloud Security Best Practices',
    category: 'Security',
    author: 'Emily Turner',
    title: 'Cloud Security Best Practices',
    link: './sample-blog.html',
  },
  {
    imageUrl:
      'https://assets.website-files.com/64bec233ea9c3e4f5dda1080/64c2fd903b98e1ea07b956ce_456%20x%20288%20(x2).png',
    altText: 'Innovations in Encryption',
    category: 'Innovation',
    author: 'Marcus Lee',
    title: 'Innovations in Encryption Technology',
    link: './sample-blog.html',
  },
  {
    imageUrl:
      'https://assets.website-files.com/64bec233ea9c3e4f5dda1080/64c2fd903b98e1ea07b956ce_456%20x%20288%20(x2).png',
    altText: 'Fourth Blog',
    category: 'Category',
    author: 'Author',
    title: 'Fourth Blog Title',
    link: './sample-blog.html',
  },
];


function Page({params}) {

 const currentSlug = params.slug
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
              <p>{tag}</p>
            </div>
          </Link>
        ))}
      </div>
   




       <BlogComponent blogs={blogsData}></BlogComponent>




         









        </div>
      </section>
    </>
  );
}

export default Page;
