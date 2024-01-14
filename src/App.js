import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RenderPosts from "./components/RenderPosts";
import "./App.css";
import Home from "./components/Home";
import Counter from "./components/Counter";
import User from "./components/User";
import Post from "./components/Post";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
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
