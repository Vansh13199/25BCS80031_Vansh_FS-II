import { useState } from "react";

export function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const addElement = () => {
        setCount(count + 1);
    };

    const removeElement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(initialValue);
    };

    return [count, addElement, removeElement, reset];
}