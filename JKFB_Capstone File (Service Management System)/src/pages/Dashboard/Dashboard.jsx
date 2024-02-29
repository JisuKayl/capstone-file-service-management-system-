/* eslint-disable no-unused-vars */
import React from "react";
import DashboardCss from "./Dashboard.module.css";

const DashboardPage = () => {
  return (
    <>
      <h1 className={DashboardCss.h1}>Dashboard</h1>

      <div className={DashboardCss.container}>
        <div className={DashboardCss.line}>{/* Vertical Line */}</div>

        <div>
          <p className={DashboardCss.Text1}>All About CITS</p>

          <p className={DashboardCss.Text2}>History:</p>

          <p className={DashboardCss.Text3}>Information:</p>

          <p className={DashboardCss.Text4}>Services Offered:</p>
        </div>
      </div>

      <div className={DashboardCss.container2}>
        <div className={DashboardCss.Box}>
          <p>Sample 1</p>
        </div>

        <div className={DashboardCss.Box}>
          <p>Sample 2</p>
        </div>

        <div className={DashboardCss.Box}>
          <p>Sample 3</p>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
