import React from "react";
import { nanoid } from "nanoid";
import PhonebookForm from "./PhonebookForm";
import Contacts from "./Contacts";
import Filter from "./Filter";

class App extends React.Component  {

  state = {
   contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
   filter:''
  }
  
 
  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number
          };
    
    const nameToCheck = name;
    console.log("существующий массив контактов - лог в addContact - там где будем сравнивать", this.state.contacts);
    console.log("nameToCheck", nameToCheck);
    
    // проверка книги на содержание контакта


//     const validation = this.state.contacts.map(({ name }) => { 
//       if (name === nameToCheck) {
//         console.log("имя совпадает");
//         return;  }
//       console.log("имя НЕ совпадает");
//  this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts]
//     }));
//     }
//     )
    
    
     this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts]
    }));
   }

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };
  
 foundContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render()
  {
    // const { contacts } = this.state
    const contactsToShow = this.foundContacts();
    // console.log("лог в рендере APP",this.state);
    return (
      <>
        <div className="Phonebook">
          <h1>Phonebook</h1>
          <PhonebookForm
            onSubmit={ this.addContact}/>
         
        </div>
        
        <Filter
          value={this.filter} onChange={this.changeFilter}
              />
        <div className='Contacts'>
          <h2>Contacts</h2>
          <Contacts
            contacts={contactsToShow}/>
          
        </div>

  
        
        </>
    )
  } 
};

export default App
