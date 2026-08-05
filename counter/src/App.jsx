import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <div >
        <button type="button" onClick={() => setCount(count - 1)}>Decrease</button>
        <button type="button" onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </div>
  )
}

export default App
