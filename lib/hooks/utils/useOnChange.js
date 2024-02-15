const useOnChange = ({ data, setData }) => {
  const onChange = ({ name, value }) => {
    setData({
      ...data,
      [name]: value,
    })
  }

  return {
    onChange,
  }
}

export default useOnChange
