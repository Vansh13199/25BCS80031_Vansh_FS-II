import React from "react";
import { useCounter } from "./hooks/useCounter.js";

function App() {
    const [count, addElement, removeElement, reset] = useCounter(0);

    return (
        <>
            <h1>{count}</h1>

            <button onClick={addElement}>+</button>
            <button onClick={removeElement}>-</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}

export default App;