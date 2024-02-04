const initialState = {
  data: [],
  loading: false,
  error: null,
}

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_FAVORITES':
      return {
        ...state,
        data: action.payload,
      }

    case 'ADD_FAVORITE': {
      const { id } = action.payload
      if (!state.data.some((favorite) => favorite.id === id)) {
        const updatedFavorites = [...state.data, action.payload.data]
        return { ...state, data: updatedFavorites }
      }
      return state
    }

    case 'REMOVE_FAVORITE': {
      const { id } = action.payload
      const updatedFavorites = state.data.filter(
        (favorite) => favorite.id !== id
      )
      return { ...state, data: updatedFavorites }
    }

    case 'RESET':
      return initialState

    default:
      return state
  }
}

export { favoritesReducer }
