import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch, useSelector } from "react-redux"
import {
  addFavorite,
  removeFavorite,
} from "@mod/mobile-common/redux/actions/favorites"
import { movieRecommendation } from "@mod/mobile-tmdb/redux/actions/movies"
import { serieRecommendation } from "@mod/mobile-tmdb/redux/actions/series"
import {
  createRecommendation,
  deleteRecommendation,
} from "@mod/mobile-user/redux/actions/recommendations"
import { RootState, AppDispatch } from "store"

interface FavoriteData {
  id: number
  name: string
  image: string
  type: string
  recommendationId: string
}

interface Props {
  favorites: FavoriteData[]
  data?: FavoriteData
}

const useHandleFavorites = ({ favorites, data }: Props) => {
  const dispatch: AppDispatch = useDispatch()

  const userId = useSelector((state: RootState) => state.auth.data.user.userId)

  // Check if the item is a favorite based on whether data is defined and finding it in favorites
  const isFavorite = data
    ? favorites.some((favorite) => favorite.id === data.id)
    : false

  // Finding the favorite in the list if data is defined
  const favorite = data ? favorites.find((f) => f.id === data.id) : undefined

  const setItem = async () => {
    await AsyncStorage.setItem("favorites", JSON.stringify(favorites))
  }

  const handleFavorite = async () => {
    if (!data) {
      console.error("Data is undefined")
      return
    }

    if (isFavorite && favorite) {
      if (data.type === "movie") {
        await dispatch(deleteRecommendation(favorite?.recommendationId, userId))
        await dispatch(removeFavorite(data.id))
      } else if (data.type === "serie") {
        await dispatch(deleteRecommendation(favorite?.recommendationId, userId))
        await dispatch(removeFavorite(data.id))
      }
    } else {
      if (data.type === "movie") {
        const response = await dispatch(movieRecommendation(data.id))

        const recommendation = await dispatch(
          createRecommendation({
            userId,
            type: "Movie",
            name: data.name,
            data: response.results.slice(0, 8),
          }),
        )

        const updatedData = {
          ...data,
          recommendationId: recommendation.recommendation.recommendationId,
        }

        await dispatch(addFavorite(updatedData))
      } else if (data.type === "serie") {
        const response = await dispatch(serieRecommendation(data.id))

        const recommendation = await dispatch(
          createRecommendation({
            userId,
            type: "Serie",
            name: data.name,
            data: response.results.slice(0, 8),
          }),
        )

        const updatedData = {
          ...data,
          recommendationId: recommendation.recommendation.recommendationId,
        }

        await dispatch(addFavorite(updatedData))
      }
    }
  }

  const removeFromFavorite = async (id: number) => {
    await dispatch(removeFavorite(id))
  }

  return {
    setItem,
    handleFavorite,
    isFavorite,
    removeFromFavorite,
  }
}

export default useHandleFavorites
