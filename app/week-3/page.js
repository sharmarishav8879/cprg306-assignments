import Link from "next/link";
import Item from "./item";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-black-600">
      <h1 className="mb-3 ml-5 font-extrabold text-green-500 ">
        Shopping List
      </h1>
      <ItemList />
      <Link
        className="text-green-500 ml-18 font-sans font-bold hover:text-green-300"
        href="/"
      >
        Home
      </Link>
    </main>
  );
}
