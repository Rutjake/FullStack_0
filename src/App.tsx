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
        <h1>Moi</h1>
      </div>
    </>
  )
}

export default App
