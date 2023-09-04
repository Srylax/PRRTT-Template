import React from "react";
import { useCounter } from "../hooks/useCounter";


type CounterProps = {
    defaultValue?: number;
}

const Counter = () => {
    const [count, setCount] = useCounter();

    return (
        <div>
            <button onClick={() => setCount(count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export default Counter;
