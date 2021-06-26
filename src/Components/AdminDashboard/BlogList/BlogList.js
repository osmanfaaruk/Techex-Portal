import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const BlogList = () => {
    const [manageBlog, setManageBlog] = useState([]);
    const [deleteBlog, setDeleteBlogs] = useState([]);


    const handleDeleteBlog = (id) => {
        fetch(`https://still-shore-02397.herokuapp.com/delete/${id}`,{
            method: 'DELETE',
        })
        .then((res) => res.json())
        .then((data)=> setDeleteBlogs(data))
    };


    useEffect(()=>{
        fetch('https://still-shore-02397.herokuapp.com/blogs')
        .then(response => response.json())
        .then(data => setManageBlog(data))
    },[manageBlog])

    return (
        <table className="table mt-5 ms-5">
        <thead>
          <tr>
            <th scope="col">Blog Title</th>
            <th scope="col">Posted Date</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {manageBlog.map((list) => (
            <tr>
              <td>{list.blogTitle}</td>
              <td>{list.time}</td>
              <td>
                <button
                  onClick={() => handleDeleteBlog(list._id)}
                  className="btn btn-danger"
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default BlogList;