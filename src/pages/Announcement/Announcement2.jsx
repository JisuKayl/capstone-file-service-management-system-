/* eslint-disable no-unused-vars */
import React from "react";
import Announcement2Css from "./Anncouncement2.module.css";


const Announcement2 = () => {
  return (
    <>
     
        <div className={Announcement2Css.box2}>
            
        <div>

            <p className={Announcement2Css.circle}>Image</p>

            <div className={Announcement2Css.box}>

            <p>Name</p>
            <br></br>
            <p>Date</p>



            </div>

            

            <div className={Announcement2Css.text}>
                <br></br>
                <p>Title</p>
                <br></br>
                <p>Details</p>

                <div className={Announcement2Css.textbox}>

                </div>



            </div>



           

            

        </div>

        </div>

       

        

        
     
    
     
    </>
  );
};

export default Announcement2;
