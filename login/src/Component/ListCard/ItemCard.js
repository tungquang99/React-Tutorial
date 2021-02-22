import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { getToken } from "../../Contants/Common";
import { Pagination, Table, Tag } from "antd";
import Search from "./Search";
import callApi from "../../Api/ApiCaller";
import { Modal, Button } from "antd";


function ItemCard() {
  const [listCard, setListCard] = useState([]);
  const [total, setTotal] = useState(0);
  const [checkbox, setCheckbox] = useState([]);
  const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [srch, setSrch] = useState({
    name: "",
    mang: "",
  });

  useEffect(() => {
    const paramString = queryString.stringify(srch);
    if (getToken()) {
      setLoading(true);
      callApi(
        `TopupCard/getTopupCardHistory?page=${
          current - 1
        }&pageSize=${pageSize}&${paramString}&trangthai=&TranID=&Lock=&createAt=&updateAt=`,
        "GET",
        "",
        {
          "Content-Type": "application/json",
          Authorization: "bearer " + localStorage.getItem("token"),
        }
      )
        .then((response) => {
          const results = response.data.data.records.map((row) => ({
            key: row.Id, // I added this line
            id: row.Id,
            account: row.Account,
            daugia: row.Daugia,
            cannap: row.Amount,
            danap: row.ChargeAmount,
            mang: row.Carry,
            status: row.Status,
            mess: row.Message,
            note: row.Note,
          }));
          setTotal(response.data.data.total);
          setListCard(results);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [current, srch]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tài Khoản",
      dataIndex: "account",
      key: "account",
      render: (text) => <a href="/">{text}</a>,
    },
    {
      title: "Đấu Giá",
      dataIndex: "daugia",
      key: "daugia",
      render: (daugia) => <span>{daugia}%</span>,
    },
    {
      title: "Cần Nạp",
      dataIndex: "cannap",
      key: "cannap",
    },
    {
      title: "Đã Nạp",
      dataIndex: "danap",
      key: "danap",
    },
    {
      title: "Mạng",
      key: "mang",
      dataIndex: "mang",
      render: (mang) =>
        mang === "viettel" ? (
          <Tag color="green">Viettel</Tag>
        ) : mang === "vinaphone" ? (
          <Tag color="blue">VinaPhone</Tag>
        ) : mang === "mobifone" ? (
          <Tag color="geekblue">MobiFone</Tag>
        ) : mang === "viettelbt" ? (
          <Tag color="green">Viettelbt</Tag>
        ) : mang === "vinaphonebt" ? (
          <Tag color="blue">VinaPhonebt</Tag>
        ) : mang === "mobifonebt" ? (
          <Tag color="geekblue">MobiFonebt</Tag>
        ) : (
          <span></span>
        ),
    },
    {
      title: "Trạng Thái",
      dataIndex: "status",
      key: "status",
      render: (status) =>
        status === 9 ? (
          <Tag color="purple">Chờ xử lý</Tag>
        ) : status === 10 ? (
          <Tag color="orange">Đang xử lý</Tag>
        ) : status === 11 ? (
          <Tag color="red">Hủy</Tag>
        ) : status === 0 ? (
          <Tag color="green">Hoàn Thành</Tag>
        ) : status === 99 ? (
          <Tag color="volcano">Xử lý lỗi</Tag>
        ) : (
          <span></span>
        ),
    },
    {
      title: "Thông điệp",
      dataIndex: "mess",
      key: "mess",
      render: (mess) => (
        <>
          <Button type="danger" onClick={showModal}>
            Message
          </Button>
          <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
        >
          {mess}
        </Modal>
        </>
      ),
    },
    {
      title: "Ghi chú",
      dataIndex: "note",
      key: "note",
      render: (note) => (
        <>
          <span>{note}</span>
        </>
      ),
    },
  ];

  function handleSearchForm(filter) {
    console.log("value: ", filter);
    setSrch({
      ...srch,
      name: filter.search,
      mang: filter.select,
    });
  }

  const onSelectChange = (checkbox) => {
    console.log("selectedRowKeys changed: ", checkbox);
    setCheckbox(checkbox);
  };

  const rowSelection = {
    checkbox,
    onChange: onSelectChange,
  };

  //Pagination
  const pageSize = 10;
  const MyPagination = ({ total, onChange, current }) => {
    return (
      <Pagination
        onChange={onChange}
        total={total}
        current={current}
        responsive={true}
      />
    );
  };

  return (
    <React.Fragment>
      <Search onSubmit={handleSearchForm} />
      <Table
        key={listCard.id}
        columns={columns}
        dataSource={listCard}
        scroll={{ x: 1000 }}
        pagination={false}
        loading={loading}
        rowSelection={{
          ...rowSelection,
        }}
      />
      <MyPagination total={total} current={current} onChange={setCurrent} />
    </React.Fragment>
  );
}

export default ItemCard;
