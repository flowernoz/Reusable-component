import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/Main";
import { bannerData } from "./static";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1 style={{textAlign:'center', paddingTop:'30px', fontSize:'40px'}}>Best places to travel</h1>
    {bannerData.map((item, index) => (
      <Main key={index} item={item} index={index} />
    ))}
  </>
);
