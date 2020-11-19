import React from "react";

function Hanmucsothe(props) {
  return (
    <div className="row">
      <div className="cell col-sm-6 form-group" data-name="name">
        <label className="control-label" data-name="name">
          <span className="label-text">Hạn mức thẻ {props.type}</span>
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
          <span className="label-text">
            Số thẻ {props.types}  đã nạp trong {props.time}
          </span>
        </label>
        <div className="field" data-name="name">
          0 VND
        </div>
      </div>
    </div>
  );
}

export default Hanmucsothe;
