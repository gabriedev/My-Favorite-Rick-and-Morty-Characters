import { useCharacters } from '../hooks/useCharacters'

function Button({ isFavorite, id }) {
  const { addToFavorite, removeToFavorite } = useCharacters()

  const handleAdd = () => addToFavorite(id)
  const handleRemove = () => removeToFavorite(id)

  if (!isFavorite) return (
    <button onClick={handleAdd} class="w-100 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 mt-4">Agregar a favorito</button>
  )

  return (
    <button onClick={handleRemove} class="w-100 px-4 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-700 mt-4">Mi favorito!</button>
  )
}

export default function Character({ id, photo, fullname, status, species, gender, origin, direction, isFavorite }) {
  return (
      <article class="flex flex-col items-center pb-10 my-[2rem]">
          <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={photo} alt={fullname} />
          <h5 class="mb-1 text-xl font-medium text-gray-900">{fullname}</h5>
          <span class="text-sm text-gray-500">Estado: {status}</span>
        <span class="text-sm text-gray-500">Especie: {species}</span>
        <span class="text-sm text-gray-500">Genero: {gender}</span>
        <span class="text-sm text-gray-500">Localizacion: {direction}</span>
        <span class="text-sm text-gray-500">Originario de {origin}</span>
        <Button isFavorite={isFavorite} id={id} />
     </article>
  )
}