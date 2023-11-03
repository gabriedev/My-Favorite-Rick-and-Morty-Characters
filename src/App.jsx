import Sidebar from './components/Sidebar'
import ListOfCharacters from './components/ListOfCharacters'
import { CharactersProvider } from './global/Character'
import './App.css'

export default function App() {
  return (
    <CharactersProvider>
      <section className="flex gap-4">
        <Sidebar />
        <ListOfCharacters />
      </section>
    </CharactersProvider>
  )
}
