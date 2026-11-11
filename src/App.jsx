import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchJoke()
  }, [])

  const fetchJoke = () => {
    setLoading(true)

    fetch('https://jokeapi.dev')
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.joke)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching joke:', error)
        setJoke('Failed to load a joke. Please try again.')
        setLoading(false)
      })
  }

  return (
    <div className="app container d-flex flex-column align-items-center">
      <h1 className="fw-bold text-primary mb-3">
        <i className="bi bi-code-slash me-2"></i>
        Programming Jokes
      </h1>

      <JokeDisplay joke={joke} loading={loading} />

      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

export default App
