/* eslint-disable no-unused-vars */
import React from "react";
import EquipReserveCss from "./EquipmentReservation.module.css";
import { useNavigate } from "react-router-dom";

const EquipmentReservationPage = () => {

  const nav = useNavigate()

  return (
    <>
      <h1 className={EquipReserveCss.h1}>Equipment</h1>

      <div className={EquipReserveCss.container}>

        
        <div className={EquipReserveCss.box} onClick={()=>nav('borrow')}>

          <div className={EquipReserveCss.img}>

            <p>Image</p>

          </div>

          <div className={EquipReserveCss.text}> 

          <p>Borrow Equipment</p>

          </div>

          <div className={EquipReserveCss.info}>

            <p>More Info</p>

          </div>

        </div>

      

        <div className={EquipReserveCss.box} onClick={()=>nav('request')}>

           <div className={EquipReserveCss.img}>

            <p>Image</p>

          </div>

          <div className={EquipReserveCss.text}> 

          <p>Pending Request</p>

          </div>

          <div className={EquipReserveCss.info2}>

            <p>More Info</p>

          </div> 

        </div>

        <div className={EquipReserveCss.box} onClick={()=>nav('view')}>

          <div className={EquipReserveCss.img}>

            <p>Image</p>

          </div>

          <div className={EquipReserveCss.text}> 

          <p>Reserved Equipment</p>

          </div>

          <div className={EquipReserveCss.info}>

            <p>More Info</p>

          </div>

        </div>

      </div>
      
    </>
  );
};

export default EquipmentReservationPage;
