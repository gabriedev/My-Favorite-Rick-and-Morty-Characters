import { useCharacters } from '../hooks/useCharacters';
import Character from './Character'

export default function ListOfCharacters() {
  const { characters } = useCharacters()
  
  return <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
    {characters.map(character => (
      <Character  key={character.id} {...character} />
    ))}
  </section>
}
