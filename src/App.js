import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RenderPosts from "./components/AboutUseEffect/RenderPosts";

import Home from "./components/Home";
import Counter from "./components/AboutUseEffect/Counter";
import User from "./components/AboutUseEffect/User";
import Post from "./components/AboutUseEffect/Post";
import Layout from "./Layout";
import AboutEffect from "./components/AboutUseEffect";

import "./App.css";
import InterviewOne from "./components/ReactInterview1";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/effect" element={<AboutEffect />} />
            <Route exact path="/inrerview/:id" element={<InterviewOne />} />
            <Route path="/user-posts" element={<RenderPosts />} />
            <Route path="/post/:id?" element={<Post />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/user/:id" element={<User />} />
            {/* Add more routes for other components */}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
