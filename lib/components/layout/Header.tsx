import React, { useState } from "react"
import { View, Text, TouchableOpacity, Platform, Image } from "react-native"
import { FontAwesome5, FontAwesome, Ionicons } from "@expo/vector-icons"
import SearchModal from "@mod/mobile-tmdb/lib/components/SearchModal"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import Utils from "../../class/Utils"
import tw from "twrnc"
import { useDynamicThemeStyles } from "../../../styles/theme"
import { useSelector } from "react-redux"
import { RootState } from "store"
import { MovieStackParamList } from "../../../../../navigators/MovieStackNavigator"
import { SerieStackParamList } from "../../../../../navigators/SerieStackNavigator"
import { MainStackParamList } from "../../../../../navigators/MainStackNavigator"
import { ArticleStackParamList } from "../../../../../navigators/ArticleStackNavigator"
import { AuthStackParamList } from "../../../../mod-mobile-auth/navigators/AuthStackNavigator"

interface HeaderProps {
  backButton: boolean
  isAuthenticated: boolean
  title: string
  type: string
}

const Header: React.FC<HeaderProps> = ({
  backButton,
  isAuthenticated,
  title,
  type,
}) => {
  const navigation =
    useNavigation<
      NavigationProp<
        MovieStackParamList &
          SerieStackParamList &
          MainStackParamList &
          ArticleStackParamList &
          AuthStackParamList
      >
    >()

  const darkMode = useSelector((state: RootState) => state.theme.darkMode)
  const user = useSelector((state: RootState) => state.auth.data?.user)

  const logo = require("../../../../../assets/images/videotek_logo.webp")

  const { background, colorIcon, text } = useDynamicThemeStyles(darkMode)

  const [modalVisible, setModalVisible] = useState(false)

  const handleModal = () => {
    setModalVisible(!modalVisible)
  }

  const handleNavigation = () => {
    if (type === "movie") {
      navigation.navigate("Movies")
    } else if (type === "tv") {
      navigation.navigate("Series")
    } else {
      navigation.goBack()
    }
  }

  const NotAuthenticatedUser = () => {
    if (isAuthenticated === false) {
      return (
        <View>
          <View
            style={tw`${background} flex flex-row items-center justify-between p-2 shadow h-20 ${
              darkMode === true ? `border-b border-slate-700` : ""
            } ${Platform.OS === "ios" ? `h-30` : ""}`}
          >
            {backButton ? (
              <View style={Platform.OS === "ios" ? tw`mt-8` : null}>
                <TouchableOpacity
                  style={tw`p-2`}
                  onPress={() => navigation.goBack()}
                >
                  <Ionicons
                    name="arrow-back-outline"
                    size={Utils.moderateScale(25)}
                    color={colorIcon}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View />
            )}

            <Text
              style={tw`${text} text-2xl font-bold sm:text-3xl ${
                Platform.OS === "ios" ? `mt-8` : ""
              }`}
            >
              {title}
            </Text>
            <View style={Platform.OS === "ios" ? tw`mt-8` : null}></View>
          </View>
        </View>
      )
    }
  }

  const AuthenticatedUser = () => {
    if (isAuthenticated === true) {
      return (
        <View>
          <View
            style={tw`${background} flex flex-row items-center justify-between h-20 p-2 shadow ${
              darkMode === true ? `border-b border-slate-700` : ""
            } ${Platform.OS === "ios" ? `h-30` : ""}`}
          >
            {backButton ? (
              <View style={Platform.OS === "ios" ? tw`mt-8` : null}>
                <TouchableOpacity
                  style={tw`p-2`}
                  onPress={() => handleNavigation()}
                >
                  <Ionicons
                    name="arrow-back-outline"
                    size={Utils.moderateScale(25)}
                    color={colorIcon}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={Platform.OS === "ios" ? tw`mt-8` : null}>
                <TouchableOpacity
                  style={tw`p-2`}
                  onPress={() =>
                    navigation.navigate("UserProfile", {
                      userId: user.userId,
                    })
                  }
                >
                  {user?.image ? (
                    <Image
                      source={{ uri: user?.image }}
                      style={[
                        tw`w-10 h-10 rounded-full`,
                        { resizeMode: "contain" },
                      ]}
                    />
                  ) : (
                    <FontAwesome5
                      name="user"
                      size={Utils.moderateScale(25)}
                      color={colorIcon}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )}

            <View style={Platform.OS === "ios" ? tw`mt-8` : null}>
              <Image
                style={{
                  resizeMode: "contain",
                  width: Utils.moderateScale(120),
                  height: Utils.moderateScale(80),
                }}
                source={logo}
              />
            </View>

            <View style={Platform.OS === "ios" ? tw`mt-8` : null}>
              <TouchableOpacity style={tw`p-2`} onPress={handleModal}>
                <FontAwesome
                  name="search"
                  size={Utils.moderateScale(25)}
                  color={colorIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <SearchModal visible={modalVisible} setVisible={setModalVisible} />
        </View>
      )
    }
  }

  return isAuthenticated === true ? AuthenticatedUser() : NotAuthenticatedUser()
}

export default Header
