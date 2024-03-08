import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Platform, Image } from 'react-native'
import { FontAwesome5, FontAwesome, Ionicons } from 'react-native-vector-icons'
import SearchModal from '@mod/mobile-tmdb/lib/components/SearchModal'
import { useNavigation } from '@react-navigation/native'
import Utils from '@mod/mobile-common/lib/class/Utils'
import tw from 'twrnc'

const Header = ({ backButton, isAuthenticated, title }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()

  const handleModal = () => {
    setModalVisible(!modalVisible)
  }

  const NotAuthenticatedUser = () => {
    if (isAuthenticated === false) {
      return (
        <View style={tw`bg-white`}>
          <View
            style={tw`flex flex-row items-center justify-between p-2 bg-white shadow h-20 ${
              Platform.OS === 'ios' ? `mt-8` : null
            }`}
          >
            {backButton ? (
              <View style={Platform.OS === 'ios' ? tw`mt-4` : null}>
                <TouchableOpacity
                  style={tw`p-2`}
                  onPress={() => navigation.goBack()}
                >
                  <Ionicons
                    name='arrow-back-outline'
                    size={Utils.moderateScale(25)}
                    color='black'
                  />
                </TouchableOpacity>
              </View>
            ) : <View/>}

            <Text style={tw`text-gray-800 text-2xl font-bold sm:text-3xl`}>
              {title}
            </Text>
            <View />
          </View>
        </View>
      )
    }
  }

  const AuthenticatedUser = () => {
    if (isAuthenticated === true) {
      return (
        <View style={tw`bg-white`}>
          <View
            style={tw`flex flex-row items-center justify-between p-2 bg-white shadow h-20 ${
              Platform.OS === 'ios' ? `mt-8` : null
            }`}
          >
            {backButton ? (
              <View style={Platform.OS === 'ios' ? tw`mt-4` : null}>
                <TouchableOpacity
                  style={tw`p-2`}
                  onPress={() => navigation.goBack()}
                >
                  <Ionicons
                    name='arrow-back-outline'
                    size={Utils.moderateScale(25)}
                    color='black'
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={Platform.OS === 'ios' ? tw`mt-4` : null}>
                <TouchableOpacity
                  style={tw`p-2`}
                  onPress={() => navigation.navigate('UserProfile')}
                >
                  <FontAwesome5
                    style={tw`text-black`}
                    name='user'
                    size={Utils.moderateScale(25)}
                  />
                </TouchableOpacity>
              </View>
            )}

            <View style={Platform.OS === 'ios' ? tw`mt-4` : null}>
              <Image
                style={[tw`w-30 h-15`, { resizeMode: 'contain' }]}
                source={require('../../../../../assets/images/videotek_logo.webp')}
              />
            </View>

            <View style={Platform.OS === 'ios' ? tw`mt-4` : null}>
              <TouchableOpacity style={tw`p-2`} onPress={handleModal}>
                <FontAwesome
                  style={tw`text-black`}
                  name='search'
                  size={Utils.moderateScale(25)}
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
