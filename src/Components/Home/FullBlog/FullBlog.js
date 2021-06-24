import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NewsLatter from "../Newslatter/NewsLatter";
import RightSideBar from "../RightSideBar/RightSideBar";

const FullBlog = () => {
  const { blogId } = useParams();
  const [fullBlog, setFullBlog] = useState({});

  useEffect(() => {
    const url = `http://localhost:4000/blogs/${blogId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setFullBlog(data));
  }, [blogId]);
  return (
    <section className="pb-0 pb-md-5 my-5 mt-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-md-9 align-self-center">
            <div class="card bg-dark text-white">
              <img
                src={fullBlog.imageURL}
                className="card-img w-100"
                alt="..."
              />
            </div>

            <div class="card mt-3">
              <div className="card-header text-center">
                {fullBlog.blogTitle}
              </div>
              <div className="card-body">
                <p className="card-text">{fullBlog.blogDetails}</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4 m-md-0 mt-5">
            <RightSideBar />
          </div>
        </div>
      </div>
      <NewsLatter />
    </section>
  );
};

export default FullBlog;
