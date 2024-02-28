/* eslint-disable no-unused-vars */
import React from "react";

import RoomReserveCss from "./RoomReservation.module.css";

import { useNavigate } from "react-router-dom";


const RoomReservationPage = () => {

  const nav = useNavigate()

  return (
    
    <>
    
      <h1 className={RoomReserveCss.h1}>Room Reservation</h1>

      <div className={RoomReserveCss.container}>

        
        <div className={RoomReserveCss.box} onClick={()=>nav('book')}>

          <div className={RoomReserveCss.img}>

            <p>Image</p>

          </div>

          <div className={RoomReserveCss.text}> 

          <p>Book Room</p>

          </div>

          <div className={RoomReserveCss.info}>

            <p>More Info</p>

          </div>

        </div>

      

        <div className={RoomReserveCss.box} onClick={()=>nav('request')}>

           <div className={RoomReserveCss.img}>

            <p>Image</p>

          </div>

          <div className={RoomReserveCss.text}> 

          <p>Pending Request</p>

          </div>

          <div className={RoomReserveCss.info}>

            <p>More Info</p>

          </div> 

        </div>

        <div className={RoomReserveCss.box} onClick={()=>nav('view')}>

          <div className={RoomReserveCss.img}>

            <p>Image</p>

          </div>

          <div className={RoomReserveCss.text}> 

          <p>Reserved Room</p>

          </div>

          <div className={RoomReserveCss.info}>

            <p>More Info</p>

          </div>

        </div>

      </div>

    </>
  );
};

export default RoomReservationPage;
