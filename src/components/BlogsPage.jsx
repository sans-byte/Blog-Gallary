import React from "react";
import "./BlogsPage.css";
import Card from "./Card";
import content from "../data.js"

function BlogsPage() {
  return (
    <>
      <div className="blog-page">
        <div style={{"paddingBottom":"16px"}}>Discover</div>
        <div className="blog-cards">
        {
          content.map(ele=>(<Card img={ele.coverImageUrl} title={ele.title}/>))
        }
        </div>
      </div>
    </>
  );
}

export default BlogsPage;
