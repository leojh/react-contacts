import React from 'react'
import { connect } from 'react-redux'

const ContactsList = ({ contacts }) =>
  <ul>
    {contacts.map(c => <li>{c}</li>)}
  </ul>

export default connect(state => ({
  contacts: state.contacts
}))(ContactsList)
