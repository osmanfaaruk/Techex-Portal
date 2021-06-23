import React from 'react';
import BlogCard from './Blogs/BlogCard';
import RightSideBar from './RightSideBar/RightSideBar';

const HomeLayout = () => {
    return (
        <section className="pb-0 pb-md-5 my-5 mt-5">
        <div className="container mb-5">
           <div className="row mb-5">
                <div className="col-md-9 align-self-center">
                    <BlogCard/>
                </div>

               <div className="col-md-3 mb-4 m-md-0">
                    <RightSideBar/>
                </div>
            </div>

        </div>
    </section>
    );
};

export default HomeLayout;