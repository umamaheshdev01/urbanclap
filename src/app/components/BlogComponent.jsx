import React from 'react';

const BlogComponent = ({ blogs }) => {
  const rows = [];
  for (let i = 0; i < blogs.length; i += 3) {
    const rowBlogs = blogs.slice(i, i + 3);
    rows.push(
      <div className="blog-row" key={i}>
        {rowBlogs.map((blog, index) => (
          <div className="blog" key={index}>
            <div className="blog-img">
              <img src={blog.imageUrl} alt={blog.altText} />
              <div className="tag">
                <p>{blog.category}</p>
              </div>
            </div>
            <div className="blog-info">
              <p>By {blog.author}</p>
              <h2>
                <a href={blog.link}>{blog.title}</a>
              </h2>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return <>{rows}</>;
};

export default BlogComponent;
