import React from "react";
import { Component } from "react";
import PhonebookForm from "./PhonebookForm";

class App extends Component  {

  state = {
  contacts: [],
  name: ''
  }
  
  handleSubmit = evt => { 
    evt.preventDefault();
  // this.props.onSubmit(this.state.name)
    console.log(evt.currentTarget);
  }

   handleChange = evt => { 
   this.setState({ name: evt.currentTarget.value })
    console.log(this.state);
  }

  render()
  {
    return (
      <>
        <div className="Phonebook">
          <h1>Phonebook</h1>

          <PhonebookForm></PhonebookForm>
          <form onSubmit={this.handleSubmit}>
            <label className='label'>Name</label>
            <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required

            onChange={this.handleChange}/>
            <button type="submit">Add Contact</button>
         </form>
        </div>
        
        <div className='Contacts'>
 <h2>Contacts</h2>
          <ul className="list">
            <li >{ this.name}</li>
</ul>
        </div>

  
        
        </>
    )
  } 
};

export default App
