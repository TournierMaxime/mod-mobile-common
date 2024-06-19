import AsyncStorage from "@react-native-async-storage/async-storage"
import { AppThunk } from "../../../../store"

export const TOGGLE_THEME = "TOGGLE_THEME"

interface ToggleThemeAction {
  type: typeof TOGGLE_THEME
  payload: boolean
}

type ThemeActionTypes = ToggleThemeAction

const toggleThemeAction = (data: boolean): ToggleThemeAction => ({
  type: TOGGLE_THEME,
  payload: data,
})

const toggleTheme =
  (data: any): AppThunk<Promise<any>> =>
  async (dispatch) => {
    await AsyncStorage.setItem("theme", JSON.stringify({ darkMode: data }))
    dispatch(toggleThemeAction(data))
  }

export { toggleTheme }

export type { ThemeActionTypes }
