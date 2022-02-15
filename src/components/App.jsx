import React from "react";

class App extends React.Component  {

  state = {
  contacts: [],
  name: ''
  }
  
  render()
  {
    return (
      <>
        <div className="Phonebook">
          <h1>Phonebook</h1>
          <form>
            <label className='label'>Name</label>
            <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
            />
            <button type="submit">Add Contact</button>
         </form>
        </div>
        
        <div className='Contacts'>
 <h2>Contacts</h2>
          <ul className="list">
            <li ></li>
</ul>
        </div>

  
        
        </>
    )
  } 
};

export default App
