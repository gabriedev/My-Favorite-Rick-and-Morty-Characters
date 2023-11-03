import { useContext } from 'react'
import { CharactersContext } from '../global/Character'

export function useCharacters() {
  const { characters, viewFavorite, setViewFavorite, favorites, setFavorites, query, setQuery, selected, setSelected } = useContext(CharactersContext)

  function addToFavorite(id) {
    setFavorites([...favorites, id])
  }

  function removeToFavorite(id) {
    setFavorites(favorites.filter(favorite => favorite !== id))
  }

  return {
    status: selected,
    characters,
    viewFavorite,
    query,
    setSelected,
    setQuery,
    setViewFavorite,
    addToFavorite,
    removeToFavorite
  }
}
