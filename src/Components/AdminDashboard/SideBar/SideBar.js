import React, { useContext , useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { UserContext  } from '../../../App';


const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setAdmin] = useState(false);



    useEffect(() => {
        fetch('https://still-shore-02397.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data =>setAdmin(data))
    },[])

    document.title = 'Admin Panel'

    return (
       <div>
           
          {isAdmin && <div  style={{height:"100vh", backgroundColor:'#82ccdd'}}>
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
           <Link style={{textDecoration:"none", color:"white"}} to="/dashboard/make-admin">
            <button style={{width:'300px'}} className="btn btn-outline-dark" type="button">
            Make Admin</button>
            </Link>
      </div>
        </div>
       </div>}
        <div className="text-center" >
        <h1 style={{color:'red', textAlign:'center', marginTop:'50%', marginLeft:'50%'}}>You are not admin</h1>
        </div>
       </div>
       
    
    );
};

export default SideBar;