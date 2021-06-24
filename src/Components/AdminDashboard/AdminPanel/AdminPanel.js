import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogList from '../BlogList/BlogList';
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
          <div className="col-7 mt-5">
            <Route path="/dashboard/blog-post">
                <BlogPost/>
            </Route>
            <Route path="/dashboard/blog-list">
                <BlogList/>
            </Route>
            <Route path="/dashboard/make-admin">
                
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
    );
};

export default AdminPanel;