import React, { Component } from 'react';
import './ContactList.css';
import SearchBar from '../search-bar/SearchBar';
import ContactCard from '../contact-card/ContactCard';
import { getContacts } from '../../services/contactService';

// const data = rawData.default.results;

class ContactList extends Component {
    // constructor(props) {
    //     super(props);
    // }

    state = {
        query: "",
        contacts: []
    }

    componentDidMount() {
        getContacts()
            .then(data => {
                // we should be recieving the array of data here
                // we should update the state with our new data
                this.setState({ contacts: data })
            })
    }

    componentDidUpdate() {
        // works, but not a good practice
        // const { query, contacts } = this.state 
        // if (query !== "") {
        //     getContacts(query)
        //         .then(data => {
        //             console.log(data);
        //             // we should be recieving the array of data here
        //             // we should update the state with our new data
        //             if (data.length !== contacts.length) {
        //                 this.setState({ contacts: data })
        //             }
        //         })
        // }

    }
    handleSubmit = (query) => {
        // take a query parameter
        // make a call to the API
        // update the state with the data
        getContacts(query)
                .then(data => {
                        this.setState({ contacts: data })
                })
    }


    handleSearch = (searchTerm) => {
        // here we need to set the state with our new searchTerm
        this.setState({ query: searchTerm })

    }

    renderContacts = (contacts) => {
        // map all contacts to a JSX element something like this:
        return contacts.map(contact =>
            <ContactCard
                key={contact.id.value}
                firstName={contact.name.first}
                lastName={contact.name.last}
                age={contact.dob.age}
                imageUrl={contact.picture.medium}
                email={contact.email}
                //contactId={contact.id.value}
            />)
    }

    render() {
        return <div>
            <SearchBar onUserInput={(data) => this.handleSearch(data)} filterText={this.state.query} onSubmit={this.handleSubmit}/>
            {this.renderContacts(this.state.contacts)}
        </div>
    }
}


export default ContactList;