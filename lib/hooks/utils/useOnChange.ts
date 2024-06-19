import { SetStateAction } from "react"

interface Data {
  [key: string]: any
}

interface ChangeEvent {
  name: string
  value: any
}

interface Props {
  data: Data
  setData: React.Dispatch<React.SetStateAction<Data>>
}

const useOnChange = ({ data, setData }: Props) => {
  const onChange = ({ name, value }: ChangeEvent) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return {
    onChange,
  }
}

export default useOnChange
