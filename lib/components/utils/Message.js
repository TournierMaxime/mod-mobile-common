import React from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc'

const Message = ({ message, priority }) => {
  switch (priority) {
    case 'info':
      return (
        <View style={tw`rounded-md p-4 my-2 flex flex-row justify-center items-center bg-blue-500`}>
          <Text style={tw`text-center items-baseline text-white font-medium text-lg`}>{message}</Text>
        </View>
      )
    case 'success':
      return (
        <View style={tw`rounded-md p-4 my-2 flex flex-row justify-center items-center bg-green-500`}>
          <Text style={tw`text-center items-baseline text-white font-medium text-lg`}>{message}</Text>
        </View>
      )
    case 'warning':
      return (
        <View style={tw`rounded-md p-4 my-2 flex flex-row justify-center items-center bg-yellow-500`}>
          <Text style={tw`text-center items-baseline text-black font-medium text-lg`}>{message}</Text>
        </View>
      )
    case 'error':
      return (
        <View style={tw`rounded-md p-4 my-2 flex flex-row justify-center items-center bg-red-500`}>
          <Text style={[tw`text-center items-baseline text-white font-medium text-lg`]}>{message}</Text>
        </View>
      )
  }
}

export default Message
