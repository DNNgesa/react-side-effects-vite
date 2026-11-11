// Step 1: Accept `fetchJoke` as a prop

const FetchButton = ({ fetchJoke }) => {
  return (
    <button className="fetch-button shadow-sm" onClick={fetchJoke}>
      <i className="bi bi-arrow-clockwise me-2"></i>
      Get a New Joke
    </button>
  )
}

export default FetchButton
