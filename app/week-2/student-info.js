import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <p>
        <span className="underline">Name :</span> Rishav Sharma
      </p>

      <Link href="https://github.com/sharmarishav8879/cprg306-assignments">
        GITHUB
      </Link>
    </main>
  );
}
