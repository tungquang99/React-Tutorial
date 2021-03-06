import React from "react";
import NganHang from "../Component/Home/NganHang";
import BoxCard from "../Component/Home/BoxCard";
import BangGiaCk from "../Component/Home/BangGiaCk";
import TichhopApi from "../Component/Home/TichhopApi";
import MyCk from "../Component/MyCk";

function Home() {
 
  return (
    <div>
      <MyCk />
      <div id="contain">
        <div className="container">
          <div className="muathe mt-5 ">
            <BoxCard />
          </div>
          <BangGiaCk />
          <TichhopApi />
          <NganHang />
        </div>
      </div>
    </div>
  );
}

export default Home;
