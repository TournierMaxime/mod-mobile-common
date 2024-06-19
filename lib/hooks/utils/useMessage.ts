import { useState } from "react"

interface Props {
  success: string
  error: string
}

const useMessage = () => {
  const [message, setMessage] = useState<Props>({
    success: "",
    error: "",
  })
  return {
    message,
    setMessage,
  }
}

export default useMessage
