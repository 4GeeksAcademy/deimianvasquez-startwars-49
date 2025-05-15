export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ], 
    favorites: [],
    characters: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'TOGGLE_FAVORITE':
      const { payload } = action
      const isFavorite = store.favorites.some((item) => item._id === payload._id)
      return {
        ...store,
        favorites: isFavorite
          ? store.favorites.filter((item) => item._id !== payload._id)
          : [...store.favorites, payload]
      }
    case 'SET_CHARACTERS':
      return {
        ...store,
        characters: action.payload
      }

    case 'REMOVE_FAVORITE':
      return {
        ...store,
        favorites: store.favorites.filter((item) => item._id !== action.payload)
      }
    default:
      throw Error('Unknown action.');
  }
}
