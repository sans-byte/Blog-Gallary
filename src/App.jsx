import React from "react";
import SideBar from "./components/SideBar";
import BlogsPage from "./components/BlogsPage";
import "./App.css"

function App() {
  return (
    <>
    <div className="divider">
      <SideBar></SideBar>
      <BlogsPage></BlogsPage>
    </div>
    </>
  );
}

export default App;
