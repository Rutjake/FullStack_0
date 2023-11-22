import './App.css'
import { useState, useEffect } from 'react'
import noteService from './services/notes'


function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  // Get Data From Backend
  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
        console.log(initialNotes)
      })
  }, [])



  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newNote,
      number: Math.random() > 0.5,
    }
    noteService
      .create(noteObject)
      .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('')
      })
  }

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <form>
          <div>name: <input /></div>
          <div>number: <input /></div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <p></p>
      </div>

    </>
  )
}

export default App
