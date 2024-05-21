import { Modal, View, Text } from "react-native"
import React from "react"
import { Pressable } from "react-native"
import tw from "twrnc"

const AlertModal = ({ visible, setVisible, action, message, success, t }) => {
  const handleModalClose = () => {
    setVisible(false)
  }

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
            <Text style={tw`mb-4 font-medium text-lg text-center`}>
              {message}
            </Text>
            <View style={tw`flex flex-row justify-between`}>
              <Pressable
                style={tw`px-4 py-2 w-auto bg-red-500 ml-auto mr-auto rounded-md`}
                onPress={() => action()}
              >
                <Text style={tw`text-white font-medium text-lg`}>
                  {t("utils.delete")}
                </Text>
              </Pressable>
              <Pressable
                style={[
                  tw`px-4 py-2 w-auto mr-auto ml-auto rounded-md`,
                  { backgroundColor: "#476EFF" },
                ]}
                onPress={() => setVisible(!visible)}
              >
                <Text style={tw`text-white font-medium text-lg`}>
                  {t("utils.cancel")}
                </Text>
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
