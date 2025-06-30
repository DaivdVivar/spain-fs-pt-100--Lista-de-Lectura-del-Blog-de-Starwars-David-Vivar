import { Details } from "./pages/details"
export const initialStore = () => {
  return {
    message: null,
    pokemons: null,
    tipos: [],
    region: [],
    favoritos: [],
  }
}
export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'deletefavoritos':
      const aux = store.favoritos.filter(fav => fav !== action.payload)
      return {
        ...store,
        favoritos: aux
      }
    case 'addfavoritos':
      return {
        ...store,
        favoritos: [...store.favoritos, action.payload]
      }
    case 'pokemon_tipos':
      return {
        ...store,
        tipos: action.payload
      }
    case 'pokemon_region':
      return {
        ...store,
        region: action.payload
      }
    case 'pokemon_details':
      return {
        ...store,
        details: action.payload
      }
    case 'loadGetPokemon':
      return {
        ...store,
        pokemons: action.payload
      }
    case 'add_task':
      const { id, color } = action.payload
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }
}