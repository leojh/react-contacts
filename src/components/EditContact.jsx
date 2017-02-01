import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addContact as _addContact } from '../state/actions/contacts'

class EditContact extends Component {

  constructor() {
    super()

    this.state = {
      name: 'Bob'
    }

    this.changeName = this.changeName.bind(this)
    this.addContact = this.addContact.bind(this)
  }

  changeName(e) {
    this.setState({ name: e.target.value })
  }

  addContact(e) {
    e.preventDefault()

    const { addContact } = this.props
    const { name } = this.state
    addContact(name)
  }

  render() {
    const { name } = this.state

    return (
      <div>
        <form>
          <div>
            <input type="text" value={name}  placeholder="Name:" onChange={this.changeName}/>
          </div>
          <div>
            <button type="submit" onClick={this.addContact}>Save</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(
  undefined, {
    addContact: _addContact
  }
)(EditContact)
