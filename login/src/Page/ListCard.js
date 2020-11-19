import React, { Component } from "react";
import NganHang from "../Component/Home/NganHang";
import TichhopApi from "../Component/Home/TichhopApi";
import ItemCard from "../Component/ListCard/ItemCard";
import MyCk from "../Component/MyCk";


class ListCard extends Component {
  render() {
    return (
      <div>
        <MyCk />
        <div id="contain">
          <div className="container">
            <div className="list-card mt-5 ">
              <ItemCard />
            </div>
            <TichhopApi />
            <NganHang />
          </div>
        </div>
      </div>
    );
  }
}

export default ListCard;
