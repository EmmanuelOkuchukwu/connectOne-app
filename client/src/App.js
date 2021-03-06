import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import LandingPage from './pages/landing/LandingPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Feed from './pages/feed/Feed';
import { PrivateRoute } from './util/PrivateRoute';
import Profile from './pages/profile/Profile';
import Post from './pages/post/Post';

function App() {
  return (
    <div className="App">
      <Routes>
        {/*<Route exact path="/" element={<LandingPage />} />*/}
        <Route exact path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/feed" element={
          <PrivateRoute>
            <Feed />
          </PrivateRoute>
        } />
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
        <Route path="/post/:id" element={
          <PrivateRoute>
            <Post />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
