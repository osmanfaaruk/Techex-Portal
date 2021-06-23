import React, {useEffect, useState } from "react";

const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() =>{
      const url = "http://localhost:4000/blogs";
      fetch(url)
      .then(res => res.json())
      .then(data => setBlogs(data))
  },[])

    return (
        <div>
           
            {
                blogs.map(blog=> 
                    <div className="card mb-3 container shadow-sm p-3 mb-5 bg-body rounded" style={{maxWidth: "900px"}}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={blog.imageURL} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title text" >{blog.blogTitle}</h5>
                          <p className="card-text">{blog.blogText}</p>
                          <p className="card-text"><small className="text-muted">Posted at {blog.time}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>



                )}
        </div>
    );
};

export default BlogCard;