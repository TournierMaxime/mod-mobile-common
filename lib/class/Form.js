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
import useResponsive from "@mod/mobile-common/lib/hooks/utils/useResponsive"

class Form {
  static inputText = (data, setData, label, name, value, readOnly) => {
    const { onChange } = useOnChange({ data, setData })

    const darkMode = useSelector((state) => state.theme.darkMode)
    const { text } = useDynamicThemeStyles(darkMode)

    const { fontSize, placeholder } = useResponsive()
    return (
      <View style={tw`w-full mb-4`}>
        <Text style={fontSize(text)}>{label}</Text>
        <TextInput
          placeholder={label}
          onChangeText={(value) => onChange({ name, value })}
          value={value}
          readOnly={readOnly}
          style={placeholder()}
        />
      </View>
    )
  }
  static inputNumber = (data, setData, label, value, name) => {
    const { onChange } = useOnChange({ data, setData })

    const darkMode = useSelector((state) => state.theme.darkMode)
    const { text } = useDynamicThemeStyles(darkMode)

    const { fontSize, placeholder } = useResponsive()
    return (
      <View style={tw`w-11/12`}>
        <Text style={fontSize(text)}>{label}</Text>
        <TextInput
          placeholder={label}
          onChangeText={(value) => onChange({ name, value: Number(value) })}
          value={value}
          keyboardType="numeric"
          style={placeholder()}
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
    const { btnSubmit } = useResponsive()

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
            <Text style={btnSubmit()}>{t("utils.changeAvatar")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  static submit = (label, fct, disabled) => {
    const { btnSubmit } = useResponsive()

    return (
      <TouchableOpacity
        style={tw`w-full ml-auto mr-auto flex-row justify-center items-center ${
          disabled ? `bg-indigo-100` : `bg-indigo-600`
        } rounded-lg`}
        onPress={async () => await fct()}
        disabled={disabled}
      >
        <Text style={btnSubmit()}>{label}</Text>
      </TouchableOpacity>
    )
  }
  static inputSwitch = (value, fct, key) => {
    return (
      <Switch onValueChange={(newValue) => fct(key, newValue)} value={value} />
    )
  }
}

export default Form
