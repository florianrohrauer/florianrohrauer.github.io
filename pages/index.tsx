import type { NextPage } from "next";
import NavBar from "../components/NavBar";
import React from "react";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Languages from "../components/Languages";
import Cursor from "../components/Cursor";
import Footer from "../components/Footer";

const Index: NextPage = () => {
  return (
    <Cursor>
      <NavBar />
      <Home />
      <Portfolio />
      <Languages />
      <Footer />
    </Cursor>
  );
};

export default Index;
