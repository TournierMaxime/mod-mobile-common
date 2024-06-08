import React, { useState } from "react"
import { View, TouchableOpacity, Text } from "react-native"
import { Entypo } from "@expo/vector-icons"
import Utils from "../../../lib/class/Utils"
import tw from "twrnc"
import { useDynamicThemeStyles } from "@mod/mobile-common/styles/theme"
import { useSelector } from "react-redux"
import useResponsive from "@mod/mobile-common/lib/hooks/utils/useResponsive"

const Accordion = ({ children, title }) => {
  const [expanded, setExpanded] = useState(false)

  const { fontSize } = useResponsive()

  const toggleItem = () => {
    setExpanded(!expanded)
  }

  const darkMode = useSelector((state) => state.theme.darkMode)
  const { borderColor, text, colorIcon } = useDynamicThemeStyles(darkMode)

  return (
    <View style={[tw`py-2 ${borderColor}`, { borderBottomWidth: 2 }]}>
      <TouchableOpacity
        style={tw`p-2 flex flex-row justify-between`}
        onPress={() => toggleItem()}
      >
        <Text style={fontSize(text)}>{title}</Text>
        <Entypo
          name={expanded ? "chevron-small-up" : "chevron-small-down"}
          size={Utils.moderateScale(25)}
          color={colorIcon}
        />
      </TouchableOpacity>
      {expanded && children}
    </View>
  )
}

export default Accordion
