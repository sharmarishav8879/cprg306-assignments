"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleNameChange = (event) => setName(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);

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
    "bg-gray-600 text-green-500 hover:bg-gray-800 px-3 py-1 rounded mr-2 ";
  if (quantity <= 1) {
    decButtonStyle = "bg-red-500 text-white px-3 py-1 rounded mr-2";
  }

  let incButtonStyle =
    "bg-gray-600 text-green-500 hover:bg-gray-800 px-3 py-1 rounded ";
  if (quantity >= 20) {
    incButtonStyle = "bg-red-500 text-white px-3 py-1 rounded";
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let itemObject = {
      name: name,
      quantity: quantity,
      category: category,
    };

    alert(`
                
        Item_Name: ${itemObject.name}
        Item_Quantity: ${itemObject.quantity}
        Item_Category: ${itemObject.category}
    `);

    setName("");
    setCategory("produce");
    setQuantity(1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-blue-100 text-black w-110 h-50 text-center rounded content-center"
    >
      <input
        type="text"
        placeholder="Item name"
        value={name}
        className="border border-blue-500 bg-white px-2 py-2 rounded w-90 focus:bg-blue-200"
        onChange={handleNameChange}
        required
      />
      <div className="flex">
        <div className="flex justify-center mt-7 border border-blue-500 bg-white px-2 w-40 p-2 rounded bg">
          <p className="mr-10 text-2xl">{quantity}</p>
          <button type="button" className={decButtonStyle} onClick={decrement}>
            -
          </button>

          <button type="button" className={incButtonStyle} onClick={increment}>
            +
          </button>
        </div>

        <select
          className="border border-blue-500 h-10 mt-8 ml-29 rounded bg-white"
          onChange={handleCategoryChange}
          value={category}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <button className="border border-blue-500 bg-blue-200 text-black w-40 mt-5 px-2 py-1 rounded focus:bg-blue-400">
          +
        </button>
      </div>
    </form>
  );
}
