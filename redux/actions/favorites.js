const addFavorite = (data) => ({
  type: "ADD_FAVORITE",
  payload: { data },
})

const removeFavorite = (id) => ({
  type: "REMOVE_FAVORITE",
  payload: { id },
})

const allFavorites = (data) => ({
  type: 'ALL_FAVORITES',
  payload: data
})

const reset = () => ({
  type: "RESET",
})

export { addFavorite, removeFavorite, allFavorites, reset }