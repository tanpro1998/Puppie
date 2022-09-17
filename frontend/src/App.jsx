import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Available from "./pages/Available/Available";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import { useDispatch } from "react-redux";
import { getAllAvailable, getAllDogs } from "./redux/API";
import Sale from "./pages/Sale/Sale";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getAllAvailable());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/available" element={<Available />} />
        <Route path="/:slug" element={<Sale />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
