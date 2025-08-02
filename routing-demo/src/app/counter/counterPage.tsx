"use client"

import {useState} from 'react';

export default function CounterPage() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>Hello from counter</h1>
            <button onClick={() => setCount(count + 1)}> Count: {count} </button>
        </>
    )
};