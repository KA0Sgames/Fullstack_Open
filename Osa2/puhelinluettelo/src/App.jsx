import { useState } from 'react'
import Persons from './Persons'
import AddPerson from './AddPerson'
import ShowFilter from './ShowFilter'
import './styles/App.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [filter, setFilter] = useState('')

  const personsToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <ShowFilter filter={filter} setFilter={setFilter} />
      </div>
      <h2>add a new</h2>
      <AddPerson persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
