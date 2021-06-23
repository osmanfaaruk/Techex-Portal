import React from 'react';
import { Link } from 'react-router-dom';


const SideBar = () => {
    return (
        <div  style={{height:"100vh", backgroundColor:'#82ccdd'}}>
        <div className="selection-part text-center"> 
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
        <div>
            <Link style={{textDecoration:"none"}} to="/dashboard/blog-list">
            <span style={{width:'300px'}} className="btn btn-outline-dark" type="button">
               Blog List</span>
            </Link>
       <br/>
       <br/>
      <Link style={{textDecoration:"none"}} to="/dashboard/blog-post">
            <span style={{width:'300px'}} className="btn btn-outline-dark" type="button">
            Post a Blog</span>
            </Link>
       <br/>
       <br/>
           <Link style={{textDecoration:"none", color:"white"}} to="/dashboard/add-services">
            <button style={{width:'300px'}} className="btn btn-outline-dark" type="button">
            Add Service</button>
            </Link>
       <br/>
       <br/>
           <Link style={{textDecoration:"none", color:"white"}} to="/dashboard/make-admin">
            <button style={{width:'300px'}} className="btn btn-outline-dark" type="button">
            Make Admin</button>
            </Link>
       <br/>
       <br/>
            <Link style={{textDecoration:"none"}} to="/dashboard/manage-services">
            <button style={{width:'300px'}} className="btn btn-outline-dark" type="button">
            Manage Services</button>
            </Link>
      </div>
        </div>
       </div>
       
    
    );
};

export default SideBar;