import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogPost from '../BlogPost/BlogPost';
import SideBar from "../SideBar/SideBar";

const AdminPanel = () => {
    return (
        <Router>
      <div className="row">
        <Switch>
          <div className="col-3">
            <SideBar/>
          </div>
        </Switch>
        <Switch>
          <div className="col-7">
            <Router path="/dashboard/blog-list">
                <BlogPost/>
            </Router>
          </div>
        </Switch>
      </div>
    </Router>
    );
};

export default AdminPanel;