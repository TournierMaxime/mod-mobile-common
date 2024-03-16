import { favoritesReducer } from "./reducers/favorites"
import { themeReducer } from "./reducers/theme"

const favoriteReducer = {
  favorites: favoritesReducer
}

const theme = {
  theme: themeReducer
}

export { favoriteReducer, theme }