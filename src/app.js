import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return(
    <div>
      <h1>Pokedex App</h1>
      <h3>Just another pokedex application that build using react.js</h3>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))