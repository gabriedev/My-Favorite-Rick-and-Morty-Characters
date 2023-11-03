import { createContext, useState, useEffect } from 'react'
import { useStore } from '../utils/store'
import { STATUS_OF_ALIVE } from '../constants'

export const CharactersContext = createContext({})

// Mapeo de fetching de datos
function mapCharacterFromRickAndMortyApi(character) {
  return {
    id: character.id,
    fullname: character.name,
    photo: character.image,
    origin: character.origin.name,
    status: character.status,
    species: character.species,
    gender: character.gender,
    direction: character.location.name,
  }
}

export function CharactersProvider({ children }) {
  const [characters, setCharacters] = useState([])
  const [viewFavorite, setViewFavorite] = useState(false)
  const [selected, setSelected] = useState(STATUS_OF_ALIVE.ALL) // El select es para el estado, si esta vivo, muerto, ect...
  const [favorites, setFavorites] = useStore('favorites', [])
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(res => {
        const allCharactersNormalized = res.results.map(mapCharacterFromRickAndMortyApi)

        setCharacters(allCharactersNormalized)
      })
      .catch(console.error)
  }, [])

  const normalizedCharacters = characters
    .map(character => ({
      ...character,
      isFavorite: favorites.includes(character.id)
    }))

    // Aplicamos los diveros filtros para obtener los resultados
    // #1 Para obtener personajs favoritos
    .filter(character => {
      if (!viewFavorite) {
        return true // <- Si esta en true, me muestra todos.
      } else {
        return character.isFavorite // <- Si character.isFavorite = true, solo me traera los que estan en true.
      }
    })
    // #2 Filtro de busqueda por nombre
    .filter(character => {
      const normalizedName = character.fullname.toLowerCase().trim()
      const normalizedQuery = query.toLowerCase().trim()

      if (!normalizedQuery.length) {
        return true
      } else {
        return normalizedName.includes(normalizedQuery)
      }
    })
    // #3 Filtro de estado
    .filter(character => {
      if (selected === STATUS_OF_ALIVE.ALL) { 
        return true
      } else {
        return character.status.toLowerCase().trim() === selected // <- Status es status de alive, dead
      }
    })
  
  return (
    <CharactersContext.Provider value={{ characters: normalizedCharacters, query, setQuery, viewFavorite, setViewFavorite, favorites, setFavorites, selected, setSelected }}>
      {children}
    </CharactersContext.Provider>
  )
}
