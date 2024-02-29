/* eslint-disable no-unused-vars */
import React from "react";
import InboxCss from "./Inbox.module.css";

const InboxPage = () => {
  return (
    <>

      <div className={InboxCss.container}>

        <div className={InboxCss.inbox}>
          <div>Date</div>

          <div>Roby Castro</div>
          
          <div>Title</div>

          <div>Text</div>

        </div>

        <div className={InboxCss.inbox}>

          <div>Date</div>

          <div>Name</div>
          
          <div>Title</div>

          <div>Text</div>

        </div>

        <div className={InboxCss.inbox}>

          <div>Date</div>

          <div>Name</div>
          
          <div>Title</div>

          <div>Text</div>

        </div>
        
        <div className={InboxCss.inbox}>

          <div>Date</div>

          <div>Name</div>
          
          <div>Title</div>

          <div>Text</div>

        </div>

        <div className={InboxCss.inbox}>

          <div>Date</div>

          <div>Name</div>
          
          <div>Title</div>

          <div>Text</div>

        </div>

        <div className={InboxCss.inbox}>

          <div>Date</div>

          <div>Name</div>
          
          <div>Title</div>

          <div>Text</div>

        </div>

        <div className={InboxCss.inbox}>

          <div>Date</div>

          <div>Name</div>
          
          <div>Title</div>

          <div>Text</div>

        </div>

      </div>


      <div className={InboxCss.header}>

          <p>Header</p>
          
      </div>

      <div className={InboxCss.main}>

        <img src="inbox.png" alt=""/>

        <p className={InboxCss.inboximage}>Image</p>

        <p>No Conversation Selected</p>

      </div>

    </>
  );
};

export default InboxPage;
