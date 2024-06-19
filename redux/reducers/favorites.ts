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
      const favorite = action.payload
      if (favorite && favorite.id) {
        if (!state.data.some((f) => f.id === favorite.id)) {
          const updatedFavorites = [...state.data, favorite]
          return { ...state, data: updatedFavorites }
        }
      } else {
        console.error("Invalid payload in ADD_FAVORITE action", action.payload)
      }
      return state
    }

    case REMOVE_FAVORITE: {
      const id = action.payload
      if (id) {
        const updatedFavorites = state.data.filter(
          (favorite) => favorite.id !== id,
        )
        return { ...state, data: updatedFavorites }
      } else {
        console.error("Invalid id in REMOVE_FAVORITE action", action.payload)
      }
      return state
    }

    case RESET:
      return initialState

    default:
      return state
  }
}

export { favoritesReducer }
