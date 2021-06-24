import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import AdminPanel from './Components/AdminDashboard/AdminPanel/AdminPanel';
import BlogCard from './Components/Home/Blogs/BlogCard';
import FullBlog from './Components/Home/FullBlog/FullBlog';
import Navbar from './Components/Home/Navbar/Navbar';
import LoginDetails from './Components/Authentication/Login/LoginDetails';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/dashboard">
          <AdminPanel/>
        </Route>
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
  );
}

export default App;
