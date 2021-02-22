import React from "react";
import Card from "../../Components/Dashboard/Card/Card";
import News from "../../Components/Dashboard/New/News";

export default function Dashboard() {
  return (
    <>
      {/* ======= LỆNH NẠP THẺ ====== */}
      <Card />
      {/* ======= TIN TỨC ====== */}
      <News />
    </>
  );
}
