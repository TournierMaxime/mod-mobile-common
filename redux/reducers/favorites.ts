import {
  ALL_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  RESET,
  FavoriteActionTypes,
} from "../actions/favorites"

interface Favorite {
  id: number
  name: string
  image: string
  type: string
  recommendationId: string
}

interface FavoriteState {
  data: Favorite[]
  loading: boolean
  error: string | null
}

const initialState: FavoriteState = {
  data: [],
  loading: false,
  error: null,
}

const favoritesReducer = (
  state = initialState,
  action: FavoriteActionTypes,
) => {
  switch (action.type) {
    case ALL_FAVORITES:
      return {
        ...state,
        data: action.payload,
      }

    case ADD_FAVORITE: {
      const { id } = action.payload
      if (!state.data.some((favorite) => favorite.id === id)) {
        const updatedFavorites = [...state.data, action.payload.data]
        return { ...state, data: updatedFavorites }
      }
      return state
    }

    case REMOVE_FAVORITE: {
      const { id } = action.payload
      const updatedFavorites = state.data.filter(
        (favorite) => favorite.id !== id,
      )
      return { ...state, data: updatedFavorites }
    }

    case RESET:
      return initialState

    default:
      return state
  }
}

export { favoritesReducer }
