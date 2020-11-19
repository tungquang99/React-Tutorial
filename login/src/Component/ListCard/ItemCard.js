import React, { useEffect, useState } from "react";
import queryString from "query-string";
import mockApi from "../../Api/MockApi";
import { getToken } from "../../Contants/Common";
import { Pagination, Table, Tag } from "antd";
import Search from "./Search";

function ItemCard() {
  const [listCard, setListCard] = useState([]);
  const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(true);
  const [srch, setSrch] = useState({
    search: "",
    filter: "",
  });

  useEffect(() => {
    const paramString = queryString.stringify(srch);
    if (getToken()) {
      setLoading(true);
      mockApi(`lenh?page=${current}&limit=${pageSize}&${paramString}`, "GET")
        .then((response) => {
          setListCard(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [current, srch]);

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Mạng",
      key: "mang",
      dataIndex: "mang",
      render: (mang) =>
        mang === "Viettel" ? (
          <Tag color="green">Viettel</Tag>
        ) : mang === "VinaPhone" ? (
          <Tag color="blue">VinaPhone</Tag>
        ) : mang === "MobiFone" ? (
          <Tag color="geekblue">MobiFone</Tag>
        ) : (
          <span></span>
        ),
    },
    {
      title: "Mệnh Giá",
      dataIndex: "menhgia",
      key: "menhgia",
    },
    {
      title: "Seri",
      dataIndex: "seri",
      key: "seri",
    },
    {
      title: "Mã Thẻ",
      dataIndex: "code",
      key: "code",
    },
  ];

  function handleSearchForm(filter) {
    console.log("value: ", filter);
    setSrch({
      ...srch,
      search: filter.search,
      filter: filter.select,
    });
  }

  //Pagination
  const total = 100;
  const pageSize = 10;
  const MyPagination = ({ total, onChange, current }) => {
    return (
      <Pagination
        onChange={onChange}
        total={total}
        current={current}
      />
    );
  };

  return (
    <React.Fragment>
      <Search onSubmit={handleSearchForm} />
      <Table
        columns={columns}
        dataSource={listCard}
        scroll={{ x: 1000 }}
        pagination={false}
        loading={loading}
      />
      <MyPagination total={total} current={current} onChange={setCurrent} />
    </React.Fragment>
  );
}

export default ItemCard;
