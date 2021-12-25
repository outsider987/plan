import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "~/components/Header";

const Edit = () => {
  return (
    <div className=" w-full h-full ">
      <Header></Header>
      
      <Link to="edit2">Edit2</Link>
      <Outlet />
    </div>
  );
};
export default Edit;
