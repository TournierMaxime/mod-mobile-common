import { TOGGLE_THEME, ThemeActionTypes } from "../actions/theme"

interface Theme {
  darkMode: boolean
}

const initialState: Theme = {
  darkMode: false,
}

const themeReducer = (
  state = initialState,
  action: ThemeActionTypes,
): Theme => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, darkMode: action.payload }
    default:
      return state
  }
}

export { themeReducer }
