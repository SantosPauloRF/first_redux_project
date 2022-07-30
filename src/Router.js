import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/home";
import Contact from "./components/contact";
import PostComponent from "./components/posts";
import Header from "./components/header";
import MainLayout from "./layouts/MainLayout"


function Router() {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="article/:id" element={<PostComponent />}/>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Router; 
