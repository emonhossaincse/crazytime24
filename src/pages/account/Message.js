import React from 'react'

export default function Message() {
  return (
    <div className="profile-container main">
  <input
    type="radio"
    id="new-message"
    name="tabs"
    defaultChecked
    hidden
  />
  <input type="radio" id="inbox" name="tabs" hidden />
  <input type="radio" id="sent-messages" name="tabs" hidden />
  <div className="left-sidebar">
    <h2>Messaging</h2>
    <div className="left-sidebar-tab">
      <label htmlFor="new-message" className="new-message-tab tab">
        New Message
      </label>
      <label htmlFor="inbox" className="inbox-tab tab">
        Inbox
      </label>
      <label htmlFor="sent-messages" className="sent-messages-tab tab">
        Sent Messages
      </label>
    </div>
  </div>
  <div className="right-content">
    <div className="new-message-content content">
      <h2>New Message</h2>
      <form action="" className="new-message-content-form">
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" placeholder="Subject" />
        <label htmlFor="send-message">Message</label>
        <textarea
          name=""
          id="send-message"
          placeholder="Type your Message"
          defaultValue={""}
        />
        <button className="button send-btn">Send</button>
      </form>
    </div>
    <div className="inbox-content content">
      <h2>Inbox</h2>
      <input type="checkbox" id="edit-delete-checkbox" hidden />
      <div className="edit-delete-message">
        <span />
        <h3 className="delete-confirmation-message">Delete selected message</h3>
        <label htmlFor="edit-delete-checkbox" className="edit-checkbox">
          Edit
        </label>
        <label htmlFor="edit-delete-checkbox" className="cancel-checkbox">
          Cancel
        </label>
      </div>
      <div className="inbox-content-message">
        <input type="checkbox" id="delete-message" hidden />
        <label htmlFor="delete-message">
          <p>Welcome to bet365</p>
          <p>22/10/2024 12:25</p>
        </label>
      </div>
    </div>
    <div className="sent-messages-content content">
      <h2>Sent Message</h2>
      <div className="sent-message-content">
        <p>Welcome to bet365</p>
        <p>22/10/2024 12:25</p>
      </div>
    </div>
  </div>
</div>

  )
}
