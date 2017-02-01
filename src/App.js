import React from 'react'
import logo from './logo.svg'
import './App.css'
import ContactsList from './components/ContactsList'

export const App = ({ name, version }) =>
  <div className="App">
    <ContactsList />
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to {name} version: {version}</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>

export default App
