import React from 'react';
import st from './PhonebookForm.module.css';

class PhonebookForm extends React.Component {
  state = {
    name: '',
  };

  onHandleChange = evt => {
    console.log(evt.currentTarget.value);

    this.setState({ name: evt.currentTarget.value });
  };

  onHandleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);

    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };

  //   reset = () => {
  //     this.setState({
  //       name: '',
  //     });
  //   };

  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label className={st.label}>
          Name
          <input
            className={st.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onHandleChange}
          />
        </label>

        <label className={st.label}>
          Number
          <input
            className={st.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onHandleChange}
          />
        </label>

        <button className={st.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default PhonebookForm;
