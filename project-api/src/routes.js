import React, { Component } from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFoundPage/NotFound";
import ProductAction from "./pages/ProductActionPage/ProductAction";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/product-list",
    exact: false,
    main: () => <ProductListPage />,
  },
  {
    path: "/product/add",
    exact: false,
    main: ({history}) => <ProductAction history={history}/>,
  },
  {
    path: "/product/:id/edit",
    exact: false,
    main: ({match}) => <ProductAction  match={match}/>,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
