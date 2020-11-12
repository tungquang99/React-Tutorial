import React from "react";
import { ToastContainer } from "react-toastify";
import CardItem from "./CardItem";

function BoxCard() {
  return (
    <div className="box-card mt-2 row">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <span className="h2 col-12">Nạp thẻ cào</span>

      <CardItem
        title="Viettel"
        box="box-success"
        boxbody="box-body_success"
        btn="btn-vt"
      />
      <CardItem
        title="MobiFone"
        box="box-warning"
        boxbody="box-body_warning"
        btn="btn-mb"
      />
      <CardItem
        title="VinaPhone"
        box="box-primary"
        boxbody="box-body_primary"
        btn="btn-vn"
      />
    </div>
  );
}

export default BoxCard;
