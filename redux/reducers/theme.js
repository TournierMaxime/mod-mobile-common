const initialState = {
  darkMode: false,
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
};

export { themeReducer }
