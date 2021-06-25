import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import AdminPanel from './Components/AdminDashboard/AdminPanel/AdminPanel';
import BlogCard from './Components/Home/Blogs/BlogCard';
import FullBlog from './Components/Home/FullBlog/FullBlog';
import Navbar from './Components/Home/Navbar/Navbar';
import LoginDetails from './Components/Authentication/Login/LoginDetails';
import React, { createContext, useState } from "react";
import PrivateRoute from './Components/Authentication/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Navbar/>
      <Switch>
        <PrivateRoute path="/dashboard">
          <AdminPanel/>
        </PrivateRoute>
        <Route path="/login">
          <LoginDetails/>
        </Route>
        <Route path="/blogs">
         <BlogCard/>
        </Route>
        <Route path="/fullBlog/:blogId">
          <FullBlog/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
