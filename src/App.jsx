import Search from './components/Search'
import Title from './components/Title'
import ListOfCharacters from './components/ListOfCharacters'
import { CharactersProvider } from './global/Character'
import './App.css'

export default function App() {
  return (
    <CharactersProvider>
      <Search />
      <Title />
      <ListOfCharacters />
    </CharactersProvider>
  )
}
