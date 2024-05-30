const useDynamicThemeStyles = (darkMode) => ({
  background: darkMode ? `bg-slate-800` : `bg-white`,
  text: darkMode ? `text-white` : `text-black`,
  colorIcon: darkMode ? `white` : `black`,
  backgroundTabColor: darkMode ? `rgb(30 41 59)` : `white`,
  borderColor: darkMode ? `border-slate-700` : `border-slate-100`,
  activeIcon: darkMode ? `teal` : `blue`,
  tag: darkMode ? `bg-teal-700` : `bg-indigo-700`,
  tagText: darkMode ? `text-white` : `text-white`,
  dropdownIconColor: darkMode ? `#fff` : `#000`,
})

export { useDynamicThemeStyles }
