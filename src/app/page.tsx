'use client';

import { useState } from 'react'

export default function Page() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
