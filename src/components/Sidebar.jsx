import Search from './Search'
import { useCharacters} from '../hooks/useCharacters'
import { STATUS_OF_ALIVE } from '../constants'

function FilterInputStatus({ selected }) {
  const { status, setSelected } = useCharacters()
  const isActive = status === selected
  
  return (
    <div className="flex items-center mb-4">
      <input
        id={selected}
        type="radio"
        name="status"
        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
        value={selected}
        checked={isActive}
        onClick={() => setSelected(selected)}
      />
      <label
        htmlFor={selected}
        className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {selected}
      </label>
    </div>
  )
}

function FilterStatus() {


  return (
    <fieldset>
      <legend className="sr-only">Status</legend>
      <h2 className="my-4 text-gray-800 dark:text-gray-300 text-md">Estado:</h2>
      {Object.keys(STATUS_OF_ALIVE).map((key) => (
      <FilterInputStatus selected={STATUS_OF_ALIVE[key]} />
      ))}
    </fieldset>
  )
}

function SwitchFavorites() {
  const { viewFavorite, setViewFavorite } = useCharacters()
  
  return (
  <div>
    <label className="relative inline-flex items-center mb-4 cursor-pointer">
      <input type="checkbox" defaultValue="" className="sr-only peer"
        check={!viewFavorite}
        onClick={() => setViewFavorite(!viewFavorite)}
        />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Solo favoritos
      </span>
    </label>
  </div>
  )
}

export default function Sidebar() {
  return (
    <div className="flex flex-col w-80 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
        Rick & Morty
      </h2>
      <Search />
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <h1 className="my-4 text-gray-800 dark:text-gray-300 text-xl">Filtros:</h1>
          <SwitchFavorites />
          <FilterStatus />
        </nav>
      </div>
    </div>
  )
}