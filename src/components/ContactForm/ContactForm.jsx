import { nanoid } from "nanoid"
import { Component } from "react"
import { Form, Label, Input, Button } from "./ContactForm.styled"

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChange = ({target:{name, value}}) => {
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        
        const newContact = {
            id: nanoid(),
            ...this.state,
        }

        this.props.addContact(newContact); 
        this.setState({
            name: '',
            number: '',
        });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Label>Name
                    <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                </Label>
                <Label>Number
                    <Input type="tel" name="number" value={this.state.number} onChange={this.handleChange} required />
                </Label>
                <Button type="submit">Add contact</Button>
            </Form>
        )
    }
}

export default ContactForm