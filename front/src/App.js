// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import UserProfile from './pages/UserProfile';
import Login from './components/Auth/Login'; // Add this
import Register from './components/Auth/Register'; // Add this

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:postId" component={PostDetail} />
        <Route path="/user/:userId" component={UserProfile} />
        <Route path="/login" component={Login} /> {/* Add this */}
        <Route path="/register" component={Register} /> {/* Add this */}
      </Switch>
    </Router>
  );
};

export default App;
