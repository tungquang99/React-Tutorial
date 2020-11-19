import React from "react";

function Hanmucngay(props) {
  return (
    <>
      <div className="row">
        <div className="cell col-sm-6 form-group" data-name="name">
          <label className="control-label" data-name="name">
            <span className="label-text">Hạn mức ngày {props.mang}</span>
            <a
              href="/"
              className="text-muted field-info"
              data-original-title
              title
            >
              <span className="fas fa-info-circle" />
            </a>
          </label>
          <div className="field" data-name="name">
            Trống
          </div>
        </div>
        <div className="cell col-sm-6 form-group" data-name="name">
          <label className="control-label" data-name="name">
            <span className="label-text">Đã nạp trong ngày {props.mang}</span>
          </label>
          <div className="field" data-name="name">
            0 VND
          </div>
        </div>
      </div>
    </>
  );
}

export default Hanmucngay;
