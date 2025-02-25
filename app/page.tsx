"use client";
import { useState } from "react";
export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex">
      <p>Compteur : {count}</p>
      <button
        className="bg-blue-400 text-white p-5 rounded flex-center mx-auto"
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>
    </div>
  );
}
