import React from 'react';
import st from './PhonebookForm.module.css';
// import isEqual from 'lodash.isequal';
class PhonebookForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  onHandleChange = evt => {
    const { name, value } = evt.target;

    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  //   onHandleSubmit = evt => {
  //     evt.preventDefault();
  //     console.log(this.state);

  //     // так тоже можно
  //     // const permission = DB.some((user) => isEqual(this.state.userInfo, user));
  //     const permission = DB.find(user => isEqual(this.state.userInfo, user.data));
  //     console.log('permission', permission);

  //     if (!permission) {
  //       this.setState({ error: true });
  //     }
  //     if (!this.state.error) {
  //       this.props.getPermission(permission);
  //       this.reset();
  //     }
  //   };
  onHandleSubmit = evt => {
    evt.preventDefault();
    // console.log(' лог в onHandleSubmit в файле формы', this.state);

    this.props.onSubmit(this.state);

    // const permission = this.state.some(name => isEqual(this.state.name, name));
    // console.log('лог имя в форме - то что пытаемся добавить', this.state.name);

    this.setState({
      name: '',
      number: '',
    });
  };

  //   reset = () => {
  //     this.setState({
  //       name: '',
  //     });
  //   };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label className={st.label}>
          Name
          <input
            className={st.input}
            type="text"
            name="name"
            value={name}
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
            value={number}
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
