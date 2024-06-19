import React from "react"
import { View, Text } from "react-native"
import tw from "twrnc"
import useResponsive from "@mod/mobile-common/lib/hooks/utils/useResponsive"

interface Props {
  message: string
  priority: string
}

const Message: React.FC<Props> = ({ message, priority }) => {
  const { btnSubmit } = useResponsive()
  switch (priority) {
    case "info":
      return (
        <View
          style={tw`rounded-md p-4 my-2 flex flex-row justify-center items-center bg-blue-500`}
        >
          <Text style={btnSubmit()}>{message}</Text>
        </View>
      )
    case "success":
      return (
        <View
          style={tw`rounded-md p-4 my-2 flex flex-row justify-center items-center bg-green-500`}
        >
          <Text style={btnSubmit()}>{message}</Text>
        </View>
      )
    case "warning":
      return (
        <View
          style={tw`rounded-md p-4 my-2 flex flex-row justify-center items-center bg-yellow-500`}
        >
          <Text style={btnSubmit()}>{message}</Text>
        </View>
      )
    case "error":
      return (
        <View
          style={tw`rounded-md p-4 my-2 flex flex-row justify-center items-center bg-red-500`}
        >
          <Text style={btnSubmit()}>{message}</Text>
        </View>
      )
  }
}

export default Message
