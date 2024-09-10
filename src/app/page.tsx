import Link from "next/link"

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-4" >
      <Link href="/task1" ><button className="bg-blue-500 p-2 rounded text-white transition-all duration-300 hover:bg-blue-600">Recursive-partitioning (Task 1)</button></Link>
      <Link href="/task2" ><button className="bg-blue-500 p-2 rounded text-white transition-all duration-300 hover:bg-blue-600">Alphabet Tile Interaction (Task 2)</button></Link>
    </div>
  );
}
