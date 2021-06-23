import { useForm } from "react-hook-form";
import axios from "axios";
import React, { useState } from "react";

const BlogPost = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURl] = useState(null);
    const onSubmit = data => {
        const serviceData = {
            blogTitle: data.blogTitle,
            blogText: data.blogText,
            blogDetails:data.blogDetails,
            imageURL: imageURL,
            time: (new Date().toDateString("dddd, mmmm, yyyy"))
        }

        const url = `http://localhost:4000/addBlogs`;
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => console.log('Server site response', res));
    };

    const handleUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'f0e5379e7b202c83aeeaa508d9778b70');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="container shadow p-3 mb-5 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
        <h6>Blog Title</h6>
        <input type="text" name="blogTitle" placeholder="Title" className="form-control form" {...register("blogTitle",{required:"This Is Required" })}  />
        </div>


        <div className="form-group pt-2">
        <h6>Blog Text</h6>
         <textarea style={{height:'200px'}} name="blogText"  className="form-control form" cols="30" rows="10"  placeholder="Blog Text"  
          {...register("blogText",{required:"This Is Required" })} />

        </div>

        <div className="form-group pt-2">
        <h6>Blog Details</h6>
         <textarea style={{height:'200px'}} name="blogDetails"  className="form-control form" cols="30" rows="10"  placeholder="Blog Text"  
          {...register("blogDetails",{required:"This Is Required" })} />

        </div>

         <h6>Blog Picture</h6> 
         <input   name="blogPicture" onChange={handleUpload} className="btn btn-outline-dark" type="file"/>
        <input  type="submit" value="Add Blog" className="btn btn-primary ms-3"  />

         </form>

        </div>
    );
};

export default BlogPost;