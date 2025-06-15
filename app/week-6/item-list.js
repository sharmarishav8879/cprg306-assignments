"use client";
import { useState } from "react";
import Item from "./item";
import itemData from "./item.json";

export default function NewItemList() {
  let itemArray = itemData.map((items) => ({ ...items }));
  console.log(itemData);

  const [sortBy, setSortBy] = useState("name");
  itemArray.sort((a, b) => {
    if (a[sortBy]) {
      let aValue = a[sortBy].toUpperCase();
      let bValue = b[sortBy].toUpperCase();
      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
      return 0;
    }
  });
  let handleSort = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <section>
      <div className="flex justify-center items-center">
        Sort By:
        <button
          className={`
             ${
               sortBy == "name"
                 ? "bg-blue-400 rounded text-black px-2 py-1 border-2 border-white m-2"
                 : "bg-red-600 rounded text-white px-2 py-1 border-2 border-red-300 m-2"
             }`}
          value="name"
          onClick={handleSort}
        >
          Name
        </button>
        <button
          className={`
             ${
               sortBy == "category"
                 ? "bg-blue-400 rounded text-black px-2 py-1 border-2 border-white m-2"
                 : "bg-red-600 rounded text-white px-2 py-1 border-2 border-red-300 m-2"
             }`}
          value="category"
          onClick={handleSort}
        >
          Category
        </button>
      </div>

      {itemArray.map((item) => (
        <Item key={item.id} itemObj={item} />
      ))}
    </section>
  );
}
