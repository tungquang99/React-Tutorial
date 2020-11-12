import React, { useState } from "react";
import mockApi from "../../Api/MockApi";
import { getToken } from "../../Contants/Common";
import Login from "../Login";
import { toast } from "react-toastify";

function CardItem(props) {
  const [modalShow, setModalShow] = useState(false);

  const [loading, setLoading] = useState(false);
  var Menhgia = useFormInput("");
  var Seri = useFormInput("");
  var Code = useFormInput("");

  const showModal = () => {
    getToken() ? setModalShow(false) : setModalShow(true);
    getToken() ? setLoading(true) : setLoading(false);
    if (getToken()) {
      mockApi("lenh", "POST", {
        mang: props.title,
        menhgia: Menhgia.value,
        seri: Seri.value,
        code: Code.value,
      })
        .then((response) => {
          console.log(response);
          setLoading(false);
          toast.success("Nạp Thành Công");
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
          toast.error("Nạp Không Thành Công");
        });
    }
  };
  return (
    <div className="col-md-4 box">
      <Login show={modalShow} onHide={() => setModalShow(false)} />
      <div className={"box-heading " + props.box}>{props.title}</div>
      <div className={"box-body " + props.boxbody}>
        <form id="" className="" noValidate="" autoComplete="off">
          <input name="charging_type" required type="hidden" defaultValue={1} />
          <input
            name="provider"
            required
            type="hidden"
            defaultValue={props.title}
          />
          <div className="form-group" id="amount-2">
            <select className="form-control" name="amount" {...Menhgia}>
              <option value>-- Chọn mệnh giá --</option>
              <option value={10000}>10,000 (37%)</option>
              <option value={20000}>20,000 (37%)</option>
              <option value={30000}>30,000 (37%)</option>
              <option value={50000}>50,000 (37%)</option>
              <option value={100000}>100,000 (37%)</option>
              <option value={200000}>200,000 (37%)</option>
              <option value={300000}>300,000 (37%)</option>
              <option value={500000}>500,000 (37%)</option>
              <option value={1000000}>1,000,000 (37%)</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              maxLength={40}
              id="serial-2"
              name="serial"
              className="form-control"
              placeholder="Số serial"
              data-toggle="modal"
              data-target="#login-modal"
              {...Seri}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              maxLength={40}
              id="code-2"
              name="code"
              className="form-control"
              placeholder="Mã thẻ"
              data-toggle="modal"
              data-target="#login-modal"
              {...Code}
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className={"btn btn-nap " + props.btn}
              onClick={() => showModal()}
              disabled={loading}
            >
              <span className="block-normal">
                <i className="fas fa-sign-in-alt" />
                <span> {loading ? "Loading..." : " Nạp ngay"} </span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default CardItem;
