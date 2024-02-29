/* eslint-disable no-unused-vars */
import React from "react";
import CreateRCSS from "../CreatingRequest/CreateCSS.module.css";
import { useNavigate } from "react-router-dom";


const Create = () => {
  const nav = useNavigate()
  return (
    <>
      <div className={CreateRCSS.container}>

        <div className={CreateRCSS.container2}>

          <div>


          <h1>Subject: </h1>
          <input type="text" className={CreateRCSS.input}></input>
          <br></br>
          <br></br>
          <h1>Date: </h1>

          <div className={CreateRCSS.textinput}>
          <p>Start</p>
          <input type="date" className={CreateRCSS.input}></input>
          <p>End</p>
          <input type="date" className={CreateRCSS.input}></input>
          </div>

          <br></br>
          
          <h1>Time: </h1>

          <div className={CreateRCSS.textinput}>

          <p>Start</p>
          <input type="time" className={CreateRCSS.input}></input>
          <p>End</p>
          <input type="time" className={CreateRCSS.input}></input>

          </div>

         

          <div>
            <button className={CreateRCSS.but} onClick={()=> nav('/equipment-reservation/request')}>Borrow</button>
          </div>

          </div>

          

        </div>

        <div className={CreateRCSS.box}>

          <div className={CreateRCSS.img}>

            <p>Equipment Image</p>

          </div>

          <div className={CreateRCSS.text}>

          <p>Projector</p>

          </div>

         
        </div>
        
        

       

      </div>
      
      <div className={CreateRCSS.container3}>

        <div className={CreateRCSS.bottomtext}>

          <h1>Specification:</h1>
          <p>SVGA (800x600 pixels)</p>
          <p>XGA (1024x768 pixels)</p>
          <p>WXGA (1280x800 pixels)</p>
          <p>1080p Full HD (1920x1080 pixels)</p>
          <p>4K UHD (3840x2160 pixels)</p>
          <br></br>
          <p>HDMI, VGA, USB cables</p>

        </div>

        

      </div>


    
    </>
    
  );
};

export default Create;
