import { Modal, View, Text } from "react-native"
import React from "react"
import { Pressable } from "react-native"
import tw from "twrnc"
import useResponsive from "@mod/mobile-common/lib/hooks/utils/useResponsive"
import { useSelector } from "react-redux"
import { useDynamicThemeStyles } from "@mod/mobile-common/styles/theme"

const AlertModal = ({ visible, setVisible, action, message, success, t }) => {
  const handleModalClose = () => {
    setVisible(false)
  }
  const darkMode = useSelector((state) => state.theme.darkMode)
  const { text } = useDynamicThemeStyles(darkMode)

  const { fontSize, btnSubmit } = useResponsive()

  return (
    <View style={tw`flex-1`}>
      <Modal
        visible={visible}
        onRequestClose={handleModalClose}
        transparent={true}
      >
        <View style={tw`flex-1 bg-black bg-opacity-50 relative`}>
          <View
            style={tw`absolute flex bg-white shadow-md rounded-t-lg w-full m-auto p-4 bottom-0`}
          >
            <Text style={[fontSize(text), { textAlign: "center" }]}>
              {message}
            </Text>
            <View style={tw`flex flex-row justify-between mt-4`}>
              <Pressable
                style={tw`px-4 py-2 w-auto bg-red-500 ml-auto mr-auto rounded-md`}
                onPress={() => action()}
              >
                <Text style={btnSubmit()}>{t("utils.delete")}</Text>
              </Pressable>
              <Pressable
                style={[
                  tw`px-4 py-2 w-auto mr-auto ml-auto rounded-md`,
                  { backgroundColor: "#476EFF" },
                ]}
                onPress={() => setVisible(!visible)}
              >
                <Text style={btnSubmit()}>{t("utils.cancel")}</Text>
              </Pressable>
            </View>
            {success ? (
              <Text style={tw`text-green-500 font-medium text-lg`}>
                {t("actions.yourAccountHasBeenSuccessfullyDeleted")}
              </Text>
            ) : null}
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default AlertModal
