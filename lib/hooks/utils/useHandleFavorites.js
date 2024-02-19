import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import {
  addFavorite,
  removeFavorite,
} from '@mod/mobile-common/redux/actions/favorites'
import { movieRecommendation } from '@mod/mobile-tmdb/redux/actions/movies'
import { serieRecommendation } from '@mod/mobile-tmdb/redux/actions/series'
import {
  createRecommendation,
  deleteRecommendation,
} from '@mod/mobile-user/redux/actions/recommendations'

const useHandleFavorites = ({ favorites, data }) => {
  const dispatch = useDispatch()

  const userId = useSelector((state) => state.auth.data.user.userId)

  const isFavorite =
    data && favorites.some((favorite) => favorite.id === data.id)
  
  const favorite = favorites.find((f) => f.id === data?.id)

  const setItem = async () => {
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites))
  }

  const handleFavorite = async () => {
    if (isFavorite) {

      if (data.type === 'movie') {

        await dispatch(deleteRecommendation(favorite.recommendationId))
        await dispatch(removeFavorite(data.id))

      } else if (data.type === 'serie') {

        await dispatch(deleteRecommendation(favorite.recommendationId))
        await dispatch(removeFavorite(data.id))

      }

    } else {
      if (data.type === 'movie') {
        const response = await dispatch(movieRecommendation(data.id))

        const recommendation = await dispatch(
          createRecommendation({
            userId,
            type: 'Movie',
            name: data.name,
            data: response.results.slice(0, 8),
          })
        )

        const updatedData = {
          ...data,
          recommendationId: recommendation.recommendation.recommendationId,
        }

        await dispatch(addFavorite(updatedData))

      } else if (data.type === 'serie') {
        const response = await dispatch(serieRecommendation(data.id))

        const recommendation = await dispatch(
          createRecommendation({
            userId,
            type: 'Serie',
            name: data.name,
            data: response.results.slice(0, 8),
          })
        )

        const updatedData = {
          ...data,
          recommendationId: recommendation.recommendation.recommendationId,
        }

        await dispatch(addFavorite(updatedData))
      }
    }
  }

  const removeFromFavorite = async (id) => {
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
