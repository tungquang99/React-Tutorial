import React from "react";
import { ToastContainer } from "react-toastify";
import BoxItem from "./BoxItem";

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

      <BoxItem
        title="Viettel"
        box="box-success"
        boxbody="box-body_success"
        btn="btn-vt"
      />
      <BoxItem
        title="MobiFone"
        box="box-warning"
        boxbody="box-body_warning"
        btn="btn-mb"
      />
      <BoxItem
        title="VinaPhone"
        box="box-primary"
        boxbody="box-body_primary"
        btn="btn-vn"
      />
    </div>
  );
}

export default BoxCard;
