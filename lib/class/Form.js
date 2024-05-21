import React from "react"
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Switch,
  Image,
} from "react-native"
import tw from "twrnc"
import useOnChange from "../hooks/utils/useOnChange"
import { useDynamicThemeStyles } from "../../styles/theme"
import { useSelector } from "react-redux"
import Utils from "./Utils"

class Form {
  static inputText = (data, setData, label, name, value, readOnly) => {
    const { onChange } = useOnChange({ data, setData })
    const darkMode = useSelector((state) => state.theme.darkMode)
    const { text } = useDynamicThemeStyles(darkMode)
    return (
      <View style={tw`w-full mb-4`}>
        <Text style={tw`font-medium text-lg ${text} mb-2`}>{label}</Text>
        <TextInput
          placeholder={label}
          onChangeText={(value) => onChange({ name, value })}
          value={value}
          readOnly={readOnly}
          style={tw`px-3 py-2 text-gray-500 text-lg bg-slate-100 rounded-md`}
        />
      </View>
    )
  }
  static inputNumber = (data, setData, label, value, name) => {
    const { onChange } = useOnChange({ data, setData })
    return (
      <View style={tw`w-11/12`}>
        <Text style={tw`font-medium text-lg`}>{label}</Text>
        <TextInput
          placeholder={label}
          onChangeText={(value) => onChange({ name, value: Number(value) })}
          value={value}
          keyboardType="numeric"
          style={tw`px-3 py-2 text-gray-500 text-lg bg-slate-100 rounded-md`}
        />
      </View>
    )
  }
  static inputSwitch = (value, fct, key) => {
    return (
      <Switch onValueChange={(newValue) => fct(key, newValue)} value={value} />
    )
  }
  static uploadFile = (data, fct, t) => {
    return (
      <View style={tw`flex flex-row justify-between items-center mb-4`}>
        <View>
          <Image
            source={{
              uri: `${data}?t=${new Date().getTime()}`,
            }}
            style={{
              width: Utils.moderateScale(48),
              height: Utils.moderateScale(48),
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            style={tw`bg-indigo-600 rounded-md`}
            onPress={() => fct()}
          >
            <Text style={tw`text-white p-2 font-medium text-base`}>
              {t("utils.changeAvatar")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  static submit = (label, fct, disabled) => {
    return (
      <TouchableOpacity
        style={tw`w-full ml-auto mr-auto flex-row justify-center items-center ${
          disabled ? `bg-indigo-100` : `bg-indigo-600`
        } rounded-lg`}
        onPress={async () => await fct()}
        disabled={disabled}
      >
        <Text style={tw`px-4 py-2 text-white text-xl font-medium`}>
          {label}
        </Text>
      </TouchableOpacity>
    )
  }
}

export default Form
