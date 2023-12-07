import { Component } from "react"
import ContactForm from "./ContactForm/ContactForm"
import Filter from "./Filter/Filter"
import ContactList from "./ContactList/ContactList"
import Notification from "./Notification/Notification"
import { Header } from "./App.styled"


class App extends Component {
  state = {
    contacts: [],
    filter: '',
    }
    
    componentDidMount() {
        const localData = localStorage.getItem('contacts');
        if (localData) {
            this.setState({
                contacts: JSON.parse(localData),
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.contacts.length !== this.state.contacts.length) {
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        }
    }

  addContact = (newContact) => {
    const isExist = this.state.contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());
    if (isExist) {
      return alert(`${newContact.name} is already exist`);
    }

    this.setState((prev) => ({
      contacts: [...prev.contacts, newContact],
    }));
  }

  handleChangeFilter = e => {
    this.setState(({
      filter: e.target.value.toLowerCase(),
    }))
  }

  filteredList = () => {
    return (
      this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter)) 
    );
  };

  handleDelete = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter(contact => contact.id !== id)
    }))
  }
  
  render() {
    return(
      <div>
        <Header>Phonebook</Header>
        <ContactForm addContact={this.addContact} />
        <Header>Contacts</Header>
        <Filter handleChangeFilter={this.handleChangeFilter} filter={this.state.filter} />
        {this.state.contacts.length ?
          <ContactList contacts={this.filteredList()} handleDelete={this.handleDelete} />  
          : <Notification message={'There are no contacts'}/>
        }
      </div>
    )
  }
}

export default App