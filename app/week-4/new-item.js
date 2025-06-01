"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    let currentQuantity = quantity.valueOf();
    if (currentQuantity <= 19) {
      setQuantity(currentQuantity + 1);
    }
  };

  const decrement = () => {
    let currentQuantity = quantity.valueOf();
    if (currentQuantity >= 2) {
      setQuantity(currentQuantity - 1);
    }
  };

  let decButtonStyle =
    "bg-gray-600 text-green-500 hover:bg-gray-800 px-3 py-1 rounded mr-10";
  if (quantity <= 1) {
    decButtonStyle = "bg-red-500 text-white px-3 py-1 rounded mr-10";
  }

  let incButtonStyle =
    "bg-gray-600 text-green-500 hover:bg-gray-800 px-3 py-1 rounded ";
  if (quantity >= 20) {
    incButtonStyle = "bg-red-500 text-white px-3 py-1 rounded";
  }

  return (
    <main>
      <h1 className="flex justify-center font-extrabold">
        Quantity: {quantity}
      </h1>
      <div className="flex justify-center mt-3">
        <button className={decButtonStyle} onClick={decrement}>
          -
        </button>
        <button className={incButtonStyle} onClick={increment}>
          +
        </button>
      </div>
    </main>
  );
}
