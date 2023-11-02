import { createContext, useState, useEffect } from 'react'

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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [search, setSearch] = useState('')

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

  return (
    <CharactersContext.Provider value={{ characters: normalizedCharacters, loading, error, favorites, setFavorites }}>
      {children}
    </CharactersContext.Provider>
  )
}
