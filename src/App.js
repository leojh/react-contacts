import React from 'react'
import logo from './logo.svg'
import './App.css'
import ContactsList from './components/ContactsList'
import AddContact from './components/AddContact'
import EditContact from './components/EditContact'

export const App = ({ name, version }) =>
  <div className="App">
    <AddContact />
    <ContactsList />
    <EditContact />
  </div>

export default App
