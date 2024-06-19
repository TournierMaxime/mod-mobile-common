import { AppThunk } from "../../../../store"

export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export const ALL_FAVORITES = "ALL_FAVORITES"
export const RESET = "RESET"

interface AddFavoriteAction {
  type: typeof ADD_FAVORITE
  payload: any
}

interface RemoveFavoriteAction {
  type: typeof REMOVE_FAVORITE
  payload: any
}

interface AllFavoritesAction {
  type: typeof ALL_FAVORITES
  payload: any
}

interface ResetAction {
  type: typeof RESET
}

type FavoriteActionTypes =
  | AddFavoriteAction
  | RemoveFavoriteAction
  | AllFavoritesAction
  | ResetAction

// Action creators
const addFavoriteAction = (data: any): AddFavoriteAction => ({
  type: ADD_FAVORITE,
  payload: data,
})

const removeFavoriteAction = (id: number): RemoveFavoriteAction => ({
  type: REMOVE_FAVORITE,
  payload: id,
})

const allFavoritesAction = (data: any): AllFavoritesAction => ({
  type: ALL_FAVORITES,
  payload: data,
})

const resetAction = (): ResetAction => ({
  type: RESET,
})

// Thunk actions
const addFavorite =
  (data: any): AppThunk<Promise<any>> =>
  async (dispatch) => {
    dispatch(addFavoriteAction(data))
  }

const removeFavorite =
  (id: number): AppThunk<Promise<any>> =>
  async (dispatch) => {
    dispatch(removeFavoriteAction(id))
  }

const allFavorites =
  (data: any): AppThunk<Promise<any>> =>
  async (dispatch) => {
    dispatch(allFavoritesAction(data))
  }

const reset = (): AppThunk<Promise<any>> => async (dispatch) => {
  dispatch(resetAction())
}

export { addFavorite, removeFavorite, allFavorites, reset }

export type { FavoriteActionTypes }
