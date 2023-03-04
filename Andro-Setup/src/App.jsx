import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
