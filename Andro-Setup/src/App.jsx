import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SetupContext from "./SetupContext";
import SingleSetup from "./components/SingleSetup";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Setup/:setupid" element={<SingleSetup/>} />
    </Route>
  ))

  return (
    <SetupContext>
      <RouterProvider router={router} />
    </SetupContext>
    
  )
}

export default App
