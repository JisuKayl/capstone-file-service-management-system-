/* eslint-disable no-unused-vars */
import React from "react";
import CreateCSS from "./CreatingRoom.module.css";
import { useNavigate } from "react-router-dom";

const CreateRoom = () => {

  const nav = useNavigate()

  return (
    <>
      <div className={CreateCSS.container}>

        <div className={CreateCSS.container2}>

          <div>


          <h1>Subject: </h1>
          <input type="text" className={CreateCSS.input}></input>
          <br></br>
          <br></br>
          <h1>Date: </h1>

          <div className={CreateCSS.textinput}>
          <p>Start</p>
          <input type="date" className={CreateCSS.input}></input>
          <p>End</p>
          <input type="date" className={CreateCSS.input}></input>
          </div>

          <br></br>
          <h1>Day: </h1>
          <input type="text" className={CreateCSS.input}></input>
          <br></br>
          <br></br>
          <h1>Time: </h1>

          <div className={CreateCSS.textinput}>

          <p>Start</p>
          <input type="time" className={CreateCSS.input}></input>
          <p>End</p>
          <input type="time" className={CreateCSS.input}></input>

          </div>

         

          <div>
            <button className={CreateCSS.but} onClick={()=> nav('/room-reservation/request')}>Reserve</button>
          </div>

          </div>

          

        </div>

        <div className={CreateCSS.box}>

          <div className={CreateCSS.img}>

            <p>Room Image</p>

          </div>

          <div className={CreateCSS.text}>

          <p>Room 101</p>
          <br></br>
          <p>Type: Laboratory Room</p>
          <p>Max Seats: 64</p>

          </div>

         
        </div>
        
        

       

      </div>
      
      <div className={CreateCSS.container3}>

        <div className={CreateCSS.bottomtext}>

          <h1>Specification:</h1>
          <h2>Processor:</h2>
          <p>Intel Core i3 or AMD Ryzen 3</p>
          <h2>Ram:</h2>
          <p>8GB DDR4</p>
          <h2>Storage:</h2>
          <p>256GB SSD (Solid State Drive)</p>
          <h2>Graphics:</h2>
          <p>Integrated Graphics (e.g., Intel UHD Graphics or AMD Radeon Vega Graphics)</p>
          <h2>Operating System:</h2>
          <p>Windows 10 Home or Linux Ubuntu</p>
          <h2>Ports:</h2>
          <p>USB 3.0, HDMI, Ethernet</p>

        </div>

        <div className={CreateCSS.bottomtext}>

          <h1>Installed Software:</h1>
          
          <p>-Microsoft Excel</p>
          <p>-Microsoft Word</p>
          <p>-Visual Code</p>
          <p>-Apache</p>
          <p>-Microsoft Excel</p>
          <p>-Microsoft Word</p>
          <p>-Visual Code</p>
          <p>-Apache</p>
          

        </div>

      </div>


    
    </>
  );
};

export default CreateRoom;
