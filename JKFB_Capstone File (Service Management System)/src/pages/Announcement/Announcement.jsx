/* eslint-disable no-unused-vars */
import React from "react";
import AnnouncementCss from "./Announcement.module.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AnnouncementPage = () => {
  const nav = useNavigate();
  return (
    <>
      <h1 className={AnnouncementCss.h1}>Announcement</h1>

      <div onClick={() => nav("details")}>
        <div className={AnnouncementCss.box2}>
          <div>
            <p className={AnnouncementCss.circle}>Image</p>
          </div>

          <div className={AnnouncementCss.description}>
            <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>Title</p>
            <p>Description</p>
          </div>

          <div className={AnnouncementCss.posted}>
            <br></br>
            <p>Posted on: 12/12/2222</p>
          </div>
        </div>

        <div className={AnnouncementCss.box2}>
          <div>
            <p className={AnnouncementCss.circle}>Image</p>
          </div>

          <div className={AnnouncementCss.description}>
            <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>Title</p>
            <br></br>
            <p>Description</p>
          </div>

          <div className={AnnouncementCss.posted}>
            <br></br>
            <p>Posted on: 12/12/2222</p>
          </div>
        </div>

        <div className={AnnouncementCss.box2}>
          <div>
            <p className={AnnouncementCss.circle}>Image</p>
          </div>

          <div className={AnnouncementCss.description}>
            <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>Title</p>
            <br></br>
            <p>Description</p>
          </div>

          <div className={AnnouncementCss.posted}>
            <br></br>
            <p>Posted on: 12/12/2222</p>
          </div>
        </div>

        <div className={AnnouncementCss.box2}>
          <div>
            <p className={AnnouncementCss.circle}>Image</p>
          </div>

          <div className={AnnouncementCss.description}>
            <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>Title</p>
            <br></br>
            <p>Description</p>
          </div>

          <div className={AnnouncementCss.posted}>
            <br></br>
            <p>Posted on: 12/12/2222</p>
          </div>
        </div>

        <div className={AnnouncementCss.box2}>
          <div>
            <p className={AnnouncementCss.circle}>Image</p>
          </div>

          <div className={AnnouncementCss.description}>
            <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>Title</p>
            <br></br>
            <p>Description</p>
          </div>

          <div className={AnnouncementCss.posted}>
            <br></br>
            <p>Posted on: 12/12/2222</p>
          </div>
        </div>

        <div className={AnnouncementCss.box2}>
          <div>
            <p className={AnnouncementCss.circle}>Image</p>
          </div>

          <div className={AnnouncementCss.description}>
            <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>Title</p>
            <br></br>
            <p>Description</p>
          </div>

          <div className={AnnouncementCss.posted}>
            <br></br>
            <p>Posted on: 12/12/2222</p>
          </div>
        </div>

        <div className={AnnouncementCss.box2}>
          <div>
            <p className={AnnouncementCss.circle}>Image</p>
          </div>

          <div className={AnnouncementCss.description}>
            <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>Title</p>
            <br></br>
            <p>Description</p>
          </div>

          <div className={AnnouncementCss.posted}>
            <br></br>
            <p>Posted on: 12/12/2222</p>
          </div>
        </div>

        <div className={AnnouncementCss.box2}>
          <div>
            <p className={AnnouncementCss.circle}>Image</p>
          </div>

          <div className={AnnouncementCss.description}>
            <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>Title</p>
            <br></br>
            <p>Description</p>
          </div>

          <div className={AnnouncementCss.posted}>
            <br></br>
            <p>Posted on: 12/12/2222</p>
          </div>
        </div>

        <div className={AnnouncementCss.box2}>
          <div>
            <p className={AnnouncementCss.circle}>Image</p>
          </div>

          <div className={AnnouncementCss.description}>
            <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>Title</p>
            <br></br>
            <p>Description</p>
          </div>

          <div className={AnnouncementCss.posted}>
            <br></br>
            <p>Posted on: 12/12/2222</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementPage;
