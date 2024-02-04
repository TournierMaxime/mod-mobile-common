import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch } from "react-redux"
import { addFavorite, removeFavorite } from "@mod/mobile-common/redux/actions/favorites"

const useHandleFavorites = ({ favorites, data }) => {
  const dispatch = useDispatch()

  const isFavorite =
    data && favorites.some((favorite) => favorite.id === data.id)

  const setItem = async () => {
    await AsyncStorage.setItem("favorites", JSON.stringify(favorites))
  }

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(data.id))
    } else {
      dispatch(addFavorite(data))
    }
  }

  const removeFromFavorite = (id) => {
    dispatch(removeFavorite(id))
  }

  return {
    setItem,
    handleFavorite,
    isFavorite,
    removeFromFavorite
  }
}

export default useHandleFavorites
