import React from 'react'
import { connect } from 'react-redux'
import { addContact as _addContact } from '../state/actions/contacts'

const AddContact = ({ addContact }) =>
  <div>
    <a onClick={() => { addContact('hello') }}>
      Add New Contact
    </a>
  </div>

export default connect(undefined, {
  addContact: _addContact
})(AddContact)
