import React from "react";
import "./NewsLatter.css";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import SocialMedia from "./SocialMedia";


const NewsLatter = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.email.length > 0 ) {
        swal("Good job!", "Successfully Subscribed", "success");
    }
  };
  return (
    <section className="pb-0 pb-md-5 my-5 mt-3 container">
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-4 container">
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex">
              <input
                type="text"
                name="email"
                placeholder="Your Email Address"
                className="form-control form"
                {...register("email", { required: "This Is Required" })}
              />
              <input className="subscribeBtn" value="Subscribe" type="submit" />
            </form>
           <div className="mt-2 newsletterText">
           <h5>Subscribe to email newsletter
            </h5>
            <p>Don't worry! We don't spam.</p>
           </div>
          </div>

          <div className="col-md-8 mb-4 m-md-0 mt-3" >
          <SocialMedia/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLatter;
