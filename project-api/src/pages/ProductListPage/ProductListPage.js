import React, { Component, useEffect, useState } from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import callApi from "../../utils/apiCaller";

function ProductListPage() {
 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const getData = await callApi("Product", "GET", null);
      console.log(getData.data);
      setProducts(getData.data);
      return getData;
    };
    getProduct();
  }, []);

  

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <h3 className="panel-title text-center mt-3">Danh Sách Sản Phẩm</h3>
      <Link to="/product/add" className="btn btn-info mt-2 mb-1">
        Thêm sản phẩm
      </Link>
      <ProductList>
        {products.map((product, index) => {
          return (
            <ProductItem
              key={index}
              product={product}
              index={index}
            />
          );
        })}
      </ProductList>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps, null)(ProductListPage);
