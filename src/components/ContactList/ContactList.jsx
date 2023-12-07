import { List, Item, Contact, Number, Button } from "./ContactList.styled"

const ContactList = ({ contacts, handleDelete }) => {
  return (
      <List>
      {contacts.map(({id, name, number}) => {
        return (
          <Item key={id}>
            <Contact>{name}: <Number>{number}</Number></Contact>
            <Button type="button" onClick={() => handleDelete(id)}>Delete</Button>
          </Item>
            )
          })}
    </List>
  )
}

export default ContactList