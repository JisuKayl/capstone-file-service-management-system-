/* eslint-disable no-unused-vars */
import React from "react";
import BorrowCSS from "../BorrowEquipment/BorrowCSS.module.css";
import { useNavigate } from "react-router-dom";

const BorrowEquip = () => {

  const nav = useNavigate()
  
  return (
    <>
    
    <div className={BorrowCSS.container} onClick={()=>nav('create')}>
        
        <div className={BorrowCSS.box}>

            <div className={BorrowCSS.img}>
                <p>Equipment Image</p>
            </div>

            <div className={BorrowCSS.text}>

            <p>Projector</p>
            

            </div>

            <div className={BorrowCSS.booknow}>
              <p>Book Now</p>
            </div>

        </div>

         <div className={BorrowCSS.box}>

            <div className={BorrowCSS.img}>
                <p>Equipment Image</p>
            </div>

            <div className={BorrowCSS.text}>

            <p>Projector</p>

            </div>

            <div className={BorrowCSS.booknow}>
              <p>Book Now</p>
            </div>

        </div>

         <div className={BorrowCSS.box}>

            <div className={BorrowCSS.img}>
                <p>Equipment Image</p>
            </div>

            <div className={BorrowCSS.text}>

            <p>Projector</p>

            </div>

            <div className={BorrowCSS.booknow}>
              <p>Book Now</p>
            </div>

        </div>

         <div className={BorrowCSS.box}>

            <div className={BorrowCSS.img}>
                <p>Equipment Image</p>
            </div>

            <div className={BorrowCSS.text}>

            <p>Projector</p>

            </div>

            <div className={BorrowCSS.booknow}>
              <p>Book Now</p>
            </div>

        </div>
        
      </div>

      <div className={BorrowCSS.container} onClick={()=>nav('create')}>
        
        <div className={BorrowCSS.box}>

            <div className={BorrowCSS.img}>
                <p>Equipment Image</p>
            </div>

            <div className={BorrowCSS.text}>

            <p>Projector</p>

            </div>

            <div className={BorrowCSS.booknow}>
              <p>Book Now</p>
            </div>

        </div>

         <div className={BorrowCSS.box}>

            <div className={BorrowCSS.img}>
                <p>Equipment Image</p>
            </div>

            <div className={BorrowCSS.text}>

            <p>Projector</p>

            </div>

            <div className={BorrowCSS.booknow}>
              <p>Book Now</p>
            </div>

        </div>

         <div className={BorrowCSS.box}>

            <div className={BorrowCSS.img}>
                <p>Equipment Image</p>
            </div>

            <div className={BorrowCSS.text}>

            <p>Projector</p>

            </div>

            <div className={BorrowCSS.booknow}>
              <p>Book Now</p>
            </div>

        </div>

         <div className={BorrowCSS.box}>

            <div className={BorrowCSS.img}>
                <p>Equipment Image</p>
            </div>

            <div className={BorrowCSS.text}>

            <p>Projector</p>

            </div>

            <div className={BorrowCSS.booknow}>

              <p>Book Now</p>

            </div>

        </div>
        
      </div>




      
    </>
  );
};

export default BorrowEquip;
