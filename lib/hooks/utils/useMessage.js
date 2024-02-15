import { useState } from "react"

const useMessage = () => {
  const [message, setMessage] = useState({
    success: null,
    error: null,
  })
  return {
    message,
    setMessage,
  }
}

export default useMessage
