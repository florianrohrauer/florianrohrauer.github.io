import type { NextPage } from "next";
import NavBar from "../components/NavBar";
import React from "react";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";

const Index: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Portfolio />
    </div>
  );
};

export default Index;
