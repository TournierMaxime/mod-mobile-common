import {
  authReducer,
  confirmEmailReducer,
  passwordReducer,
  registerUserReducer
} from './reducers/auth'
import { favoritesReducer } from "./reducers/favorites"

const authCommonReducer = {
  auth: authReducer,
  register: registerUserReducer,
  password: passwordReducer,
  confirmEmail: confirmEmailReducer
}

const favoriteReducer = {
  favorites: favoritesReducer
}

export { authCommonReducer, favoriteReducer }