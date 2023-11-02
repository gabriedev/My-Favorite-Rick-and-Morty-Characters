import { useContext } from 'react'
import { CharactersContext } from '../global/Character'

export function useCharacters() {
  const { characters, loading, error, favorites, setFavorites } = useContext(CharactersContext)

  function addToFavorite(id) {
    setFavorites([...favorites, id])
  }

  function removeToFavorite(id) {
    setFavorites(favorites.filter(favorite => favorite !== id))
  }

  return {
    characters,
    loading,
    error,
    addToFavorite,
    removeToFavorite
  }
}
