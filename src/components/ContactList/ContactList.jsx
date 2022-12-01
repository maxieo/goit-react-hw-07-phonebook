import React from "react";
import ContactItem from "components/ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { visibleContacts } from "redux/selectors"; 

export const ContactList = () => {
  const filterContacts = useSelector(visibleContacts)

  return (
    <ul>
      {filterContacts.map(contact => ( 
        <ContactItem key={contact.id} contact={contact}/>
      ))}
    </ul>
  )
}