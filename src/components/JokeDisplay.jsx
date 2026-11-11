// Step 1: Accept `joke` and `loading` as props

const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container shadow-sm border" style={{ maxWidth: '600px' }}>
      <p className="mb-0 text-dark">
        {loading ? (
          'Loading...'
        ) : (
          <>
            <i className="bi bi-chat-quote-fill text-primary me-2"></i>
            {joke}
          </>
        )}
      </p>
    </div>
  )
}

export default JokeDisplay
