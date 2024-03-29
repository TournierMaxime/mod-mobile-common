import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { allFavorites } from '@mod/mobile-common/redux/actions/favorites'
import { logoutUser } from '@mod/mobile-auth/redux/actions/auth'
import { toggleTheme } from '@mod/mobile-common/redux/actions/theme'

const useLocalStorage = ({ onLoginSuccess }) => {
  const dispatch = useDispatch()
  const { i18n } = useTranslation()
  const [lang, setLang] = useState(i18n.language)

  const getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData')
      if (userData) {
        const parsedData = JSON.parse(userData)
        onLoginSuccess(parsedData)
      } else {
        dispatch(logoutUser())
      }
    } catch (error) {
      console.log('getUserData error', error)
    }
  }

  const updateLanguage = async () => {
    try {
      const storedLang = await AsyncStorage.getItem('lang')
      if (storedLang) {
        setLang(storedLang)
        i18n.changeLanguage(storedLang)
      }
    } catch (error) {
      console.log('updateLanguage', error)
    }
  }

  const favorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites) {
        const parse = JSON.parse(storedFavorites)
        await dispatch(allFavorites(parse))
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des favoris', error)
    }
  }

  const loadTheme = async () => {
    const storedTheme = await AsyncStorage.getItem('theme')
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
