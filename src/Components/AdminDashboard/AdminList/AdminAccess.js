import React from "react";
import { useForm } from "react-hook-form";

const AdminAccess = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        const adminName = {
          email: data.email,
        };
    
        const url = `https://still-shore-02397.herokuapp.com/addAdmin`;
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(adminName),
        }).then((res) => console.log("Server site response", res));
      };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group pt-2 mt-5">
          <h6>Email</h6>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="form-control form"
            {...register("email", { required: "This Is Required" })}
          />
          <h6>Password</h6>
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="form-control form"
            {...register("password", { required: "This Is Required" })}
          />
          <input
            type="submit"
            value="Make Admin"
            className="btn btn-primary mt-2"
          />
        </div>
      </form>
    </div>
  );
};

export default AdminAccess;
