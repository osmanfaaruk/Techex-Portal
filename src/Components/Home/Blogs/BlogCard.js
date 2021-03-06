
import React, {useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() =>{
      const url = "https://still-shore-02397.herokuapp.com/blogs";
      fetch(url)
      .then(res => res.json())
      .then(data => setBlogs(data))
  },[])

    return (
        <div>
          <div className="spinner" >
        {blogs.length === 0 &&
         <div className="spinner-border" style={{marginBottom:"1000px" ,marginLeft:'400px'}} role="status"><span className="visually-hidden">Loading...</span>
        </div>
           }
        </div>
            {
                blogs.map(blog=> 
                    <Link to={`/fullBlog/${blog._id}`}>
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
                    </Link>



                )}
        </div>
    );
};

export default BlogCard;