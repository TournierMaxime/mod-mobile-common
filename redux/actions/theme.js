import AsyncStorage from '@react-native-async-storage/async-storage'

const toggleTheme = (data) => async (dispatch) => {
  await AsyncStorage.setItem('theme', JSON.stringify({ darkMode: data }));
  dispatch({
    type: 'TOGGLE_THEME',
    payload: data,
  });
};

export { toggleTheme }
