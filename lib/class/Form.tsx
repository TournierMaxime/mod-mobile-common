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
import { RootState } from "../../../../store"

type FormData = {
  [key: string]: any
}

type SetFormData = React.Dispatch<React.SetStateAction<FormData>>

class Form {
  static inputText = (
    data: FormData,
    setData: SetFormData,
    label: string,
    name: string,
    value: string,
    readOnly: boolean,
  ) => {
    const { onChange } = useOnChange({ data, setData })

    const darkMode = useSelector((state: RootState) => state.theme.darkMode)
    const { text } = useDynamicThemeStyles(darkMode)

    const { fontSize, placeholder } = useResponsive()
    return (
      <View style={tw`w-full mb-4`}>
        <Text style={fontSize(text)}>{label}</Text>
        <TextInput
          placeholder={label}
          onChangeText={(value) => onChange({ name, value })}
          value={value}
          editable={!readOnly}
          style={placeholder()}
        />
      </View>
    )
  }

  static inputNumber = (
    data: FormData,
    setData: SetFormData,
    label: string,
    value: string,
    name: string,
  ) => {
    const { onChange } = useOnChange({ data, setData })

    const darkMode = useSelector((state: RootState) => state.theme.darkMode)
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
          maxLength={6}
          style={placeholder()}
        />
      </View>
    )
  }

  static inputSwitch = (
    value: boolean,
    fct: (key: string, value: boolean) => void,
    key: string,
  ) => {
    return (
      <Switch onValueChange={(newValue) => fct(key, newValue)} value={value} />
    )
  }

  static uploadFile = (
    data: string,
    fct: () => void,
    t: (key: string) => string,
  ) => {
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

  static submit = (
    label: string,
    fct: () => Promise<any>,
    disabled: boolean,
  ) => {
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
}

export default Form
