/* eslint-disable no-unused-vars */
import React from "react";
import bookcss from "../BookRoom/BookRoom.module.css";
import { useNavigate } from "react-router-dom";

const BookRoom = () => {
  const nav = useNavigate();

  return (
    <>
      <h2>Floor 1</h2>

      <div className={bookcss.container}>
        <div className={bookcss.box}>
          <div className={bookcss.img}>
            <p>Room Image</p>
          </div>

          <div className={bookcss.text}>
            <p>Room 101</p>
            <p>Type: Laboratory Room</p>
            <p>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div className={bookcss.img}>
            <p>Room Image</p>
          </div>

          <div className={bookcss.text}>
            <p>Room 102</p>
            <p>Type: Laboratory Room</p>
            <p>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div className={bookcss.img}>
            <p>Room Image</p>
          </div>

          <div className={bookcss.text}>
            <p>Room 103</p>
            <p>Type: Laboratory Room</p>
            <p>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div className={bookcss.img}>
            <p>Room Image</p>
          </div>

          <div className={bookcss.text}>
            <p>Room 104</p>
            <p>Type: Lecture Room</p>
            <p>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>
      </div>

      <h2>Floor 2</h2>

      <div className={bookcss.container}>
        <div className={bookcss.box}>
          <div className={bookcss.img}>
            <p>Room Image</p>
          </div>

          <div className={bookcss.text}>
            <p>Room 201</p>
            <p>Type: Laboratory Room</p>
            <p>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div className={bookcss.img}>
            <p>Room Image</p>
          </div>

          <div className={bookcss.text}>
            <p>Room 202</p>
            <p>Type: Laboratory Room</p>
            <p>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div className={bookcss.img}>
            <p>Room Image</p>
          </div>

          <div className={bookcss.text}>
            <p>Room 203</p>
            <p>Type: Laboratory Room</p>
            <p>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div className={bookcss.img}>
            <p>Room Image</p>
          </div>

          <div className={bookcss.text}>
            <p>Room 204</p>
            <p>Type: Lecture Room</p>
            <p>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>
      </div>

      <h2>Floor 3</h2>

      <div className={bookcss.container}>
        <div className={bookcss.box}>
          <div className={bookcss.img}>
            <p>Room Image</p>
          </div>

          <div className={bookcss.text}>
            <p>Room 301</p>
            <p>Type: Laboratory Room</p>
            <p>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div className={bookcss.img}>
            <p>Room Image</p>
          </div>

          <div className={bookcss.text}>
            <p>Room 302</p>
            <p>Type: Laboratory Room</p>
            <p>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div className={bookcss.img}>
            <p>Room Image</p>
          </div>

          <div className={bookcss.text}>
            <p>Room 303</p>
            <p>Type: Laboratory Room</p>
            <p>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div className={bookcss.img}>
            <p>Room Image</p>
          </div>

          <div className={bookcss.text}>
            <p>Room 304</p>
            <p>Type: Lecture Room</p>
            <p>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>
      </div>

      <h2>FLoor 4</h2>

      <div className={bookcss.container}>
        <div className={bookcss.box}>
          <div className={bookcss.img}>
            <p>Room Image</p>
          </div>

          <div className={bookcss.text}>
            <p>Room 401</p>
            <p>Type: Laboratory Room</p>
            <p>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div className={bookcss.img}>
            <p>Room Image</p>
          </div>

          <div className={bookcss.text}>
            <p>Room 402</p>
            <p>Type: Laboratory Room</p>
            <p>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div className={bookcss.img}>
            <p>Room Image</p>
          </div>

          <div className={bookcss.text}>
            <p>Room 403</p>
            <p>Type: Laboratory Room</p>
            <p>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div className={bookcss.img}>
            <p>Room Image</p>
          </div>

          <div className={bookcss.text}>
            <p>Room 404</p>
            <p>Type: Lecture Room</p>
            <p>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookRoom;
