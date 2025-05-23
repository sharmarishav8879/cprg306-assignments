export default function Item({ name, quantity, category }) {
  return (
    <ul>
      <li className="p-4 list-none bg-green-600 mb-4 inline-block ml-3 rounded-2xl  border-2 border-green-250">
        <h2 className="font-bold font-serif text-stone-900">{name}</h2>
        <div className="text-stone-900">
          Buy {quantity} in {category}
        </div>
      </li>
    </ul>
  );
}
