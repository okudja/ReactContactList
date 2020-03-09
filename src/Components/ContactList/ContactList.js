import React from "react";
import "./ContactList.css";

// Components
import ContactItem from "./ContactListItem/ContactItem";

const ContactList = () => {
    return (
        <div>
            <h1>Contact List app</h1>
            <ul className="list-group pull-down" id="contact-list"></ul>
            <ContactItem />


        </div>);
};
export default ContactList;
