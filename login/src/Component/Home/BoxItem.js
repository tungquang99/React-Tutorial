import React, { useState } from "react";
import mockApi from "../../Api/MockApi";
import { getToken } from "../../Contants/Common";
import { toast } from "react-toastify";
import { FastField, Form, Formik } from "formik";
import InputField from "../../Validation/InputField";
import SelectField from "../../Validation/SelectField";
import { _OPTIONS } from "../../Contants/option";
import * as Yup from "yup";

function BoxItem(props) {
  const [modalShow, setModalShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const showModal = (values) => {
    getToken() ? setModalShow(false) : setModalShow(true);
    getToken() ? setLoading(true) : setLoading(false);
    if (getToken()) {
      mockApi("lenh", "POST", {
        mang: props.title,
        menhgia: values.amount,
        seri: values.serial,
        code: values.code,
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

  //Validation
  const initialValues = {
    serial: "",
    code: "",
    amount: "",
  };

  const validationSchema = Yup.object().shape({
    serial: Yup.string().required("This field is required."),
    code: Yup.string().required("This field is required."),
    amount: Yup.number().required("This field is required.").nullable(),
  });

  return (
    <div className="col-md-4 box">
      <div className={"box-heading " + props.box}>{props.title}</div>
      <div className={"box-body " + props.boxbody}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            showModal(values);
            resetForm({
              values: {
                serial: "",
                code: "",
                amount: "",
              },
            });
          }}
        >
          {(formikProps) => {
            return (
              <Form id="addcard" className="" noValidate="" autoComplete="off">
                <FastField
                  name="amount"
                  component={SelectField}
                  options={_OPTIONS}
                />
                <FastField
                  name="serial"
                  component={InputField}
                  placeholder="Số serial"
                  maxLength={40}
                />
                <FastField
                  name="code"
                  component={InputField}
                  placeholder="Mã thẻ"
                  maxLength={40}
                />
                <div className="form-group">
                  <button
                    type="submit"
                    className={"btn btn-nap " + props.btn}
                    disabled={loading}
                  >
                    <span className="block-normal">
                      {loading ? (
                        <span>
                          <i className="fas fa-sync fa-spin"></i> Loading...
                        </span>
                      ) : (
                        <span>
                          <i className="fas fa-sign-in-alt" /> Nạp ngay
                        </span>
                      )}
                    </span>
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default BoxItem;
