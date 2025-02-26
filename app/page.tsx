"use client";
import { useState } from "react";
export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex">
      <p>Compteur : {count}</p>
      <button
        className="mx-auto flex rounded bg-blue-400 p-5 text-white"
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>
    </div>
  );
}
