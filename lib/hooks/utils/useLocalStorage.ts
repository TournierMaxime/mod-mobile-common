import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { allFavorites } from "@mod/mobile-common/redux/actions/favorites"
import { logoutUser } from "@mod/mobile-auth/redux/actions/auth"
import { toggleTheme } from "@mod/mobile-common/redux/actions/theme"
import { AppDispatch } from "store"

interface UserData {
  userId: string
  email: string
  password: string
  pseudo: string
  verified: boolean
  verificationCode: number
  forgetPassword: number
  createdAt: string
  provider: string
  expoPushToken: string
  image: string
  lang: string
  isEmailActive: boolean
}

interface Props {
  onLoginSuccess: (userData: UserData) => void
}

const useLocalStorage = ({ onLoginSuccess }: Props) => {
  const dispatch: AppDispatch = useDispatch()
  const { i18n } = useTranslation()
  const [lang, setLang] = useState(i18n.language)

  const getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem("userData")
      if (userData) {
        const parsedData = JSON.parse(userData)
        onLoginSuccess(parsedData)
      } else {
        dispatch(logoutUser())
      }
    } catch (error: any) {
      throw new Error(error)
    }
  }

  const updateLanguage = async () => {
    try {
      const storedLang = await AsyncStorage.getItem("lang")
      if (storedLang) {
        setLang(storedLang)
        i18n.changeLanguage(storedLang)
      }
    } catch (error: any) {
      throw new Error(error)
    }
  }

  const favorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("favorites")
      if (storedFavorites) {
        const parse = JSON.parse(storedFavorites)
        await dispatch(allFavorites(parse))
      }
    } catch (error: any) {
      throw new Error(error)
    }
  }

  const loadTheme = async () => {
    const storedTheme = await AsyncStorage.getItem("theme")
    if (storedTheme) {
      const { darkMode } = JSON.parse(storedTheme)
      await dispatch(toggleTheme(darkMode))
    }
  }

  return {
    getUserData,
    updateLanguage,
    favorites,
    loadTheme,
    lang,
  }
}

export default useLocalStorage
