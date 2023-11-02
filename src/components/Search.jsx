export default function Search() {
  return (
    <div className="search py-4 bg-blue-300 flex item-center justify-center gap-3 shadow-sm">
      <input className="rounded-2xl px-3 py-1" type="text" placeholder="Search" />
      <button className= "font-bold text-blue-600 hover:text-blue-700 border rounded-3xl p-2 hover:bg-gray-200">Search</button>
    </div>
  )
}
