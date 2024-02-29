/* eslint-disable no-unused-vars */
import React from "react";
import bookcss from './BookRoom.module.css';


const BookRoom = () => {
  return (
    <>
      <h2>Floor 1</h2>

      <div className={bookcss.container}>
        
        <div className={bookcss.box}>

            <div className={bookcss.img}>
                <p>Room Image</p>
            </div>

        </div>
        
      </div>
    </>
  );
};

export default BookRoom;
