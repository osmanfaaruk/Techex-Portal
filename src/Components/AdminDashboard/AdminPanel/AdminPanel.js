import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
          <div className="col-9">
            <Router>
              
            </Router>
          </div>
        </Switch>
      </div>
    </Router>
    );
};

export default AdminPanel;