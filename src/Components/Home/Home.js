import React from 'react';
import Navbar from './Navbar/Navbar';
import HomeBlogs from './HomeBlogs/HomeBlog';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <HomeBlogs/>
        </div>
    );
};

export default Home;