import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import AdminPanel from './Components/AdminDashboard/AdminPanel/AdminPanel';
import BlogCard from './Components/Home/Blogs/BlogCard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/adminPanel">
          <AdminPanel/>
        </Route>
        <Route path="/blogs">
         <BlogCard/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
