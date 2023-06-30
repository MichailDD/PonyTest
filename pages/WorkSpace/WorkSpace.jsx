import React from "react";
<<<<<<< HEAD:pages/WorkSpace/WorkSpace.jsx
import HeaderWork from "../../components/HeaderWork/HeaderWork";
import "./workSpace.module.scss";
import InputSec from "../../components/InputWork/InputSec";
import RoadMap from "../../components/RoadMap/RoadMap";
import FooterWork from "../../components/FooterWork/FooterWork";
=======
import { Outlet, Route } from "react-router-dom";
import FooterWork from "../../components/FooterWork/FooterWork";
import HeaderWork from "../../components/HeaderWork/HeaderWork";
>>>>>>> danil:src/pages/WorkSpace/WorkSpace.jsx

const WorkSpace = () => {
  return (
    <>
      <HeaderWork />
<<<<<<< HEAD:pages/WorkSpace/WorkSpace.jsx
      <InputSec />
      <RoadMap />
=======
      <Outlet />
>>>>>>> danil:src/pages/WorkSpace/WorkSpace.jsx
      <FooterWork />
    </>
  );
};

export default WorkSpace;
