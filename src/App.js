import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chats from "./pages/chats";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Newchats from "./pages/newchats";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/newchats" element={<Newchats />} />
      </Routes>
    </Router>
  );
};

export default App;
