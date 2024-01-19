import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import ProductionMovie from '../views/Tmdb/Movies/Production'
import ProductionSerie from '../views/Tmdb/Series/Production'
import AllPosts from '../views/Posts/AllPosts'
import AllCritics from '../views/Critics/AllCritics'
import tw from 'twrnc'

const Tabs = ({ id, movie, serie, t, language, selectedTab, setSelectedTab }) => {
  return (
    <View style={tw`h-full`}>
      <View style={tw`flex-row bg-white mb-4`}>
        <TouchableOpacity
          style={tw`flex-1 p-4 items-center m-4`}
          onPress={() => setSelectedTab('about')}
        >
          <Text
            style={
              selectedTab === 'about' ? tw`text-blue-500 font-medium text-lg text-center w-20 border-b-2 border-blue-500` : tw`text-black font-medium text-lg`
            }
          >
            {t('about')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-1 p-4 items-center m-4`}
          onPress={() => setSelectedTab('posts')}
        >
          <Text
            style={
              selectedTab === 'posts' ? tw`text-blue-500 font-medium text-lg text-center w-20 border-b-2 border-blue-500` : tw`text-black font-medium text-lg`
            }
          >
            {t('posts')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-1 p-4 items-center m-4`}
          onPress={() => setSelectedTab('critics')}
        >
          <Text
            style={
              selectedTab === 'critics'
                ? tw`text-blue-500 font-medium text-lg text-center w-20 border-b-2 border-blue-500`
                : tw`text-black font-medium text-lg`
            }
          >
            {t('critics')}
          </Text>
        </TouchableOpacity>
      </View>
      {selectedTab === 'about' &&
        (movie ? (
          <ProductionMovie id={id} movie={movie} language={language} t={t} />
        ) : serie ? (
          <ProductionSerie id={id} serie={serie} language={language} t={t} />
        ) : null)}

      {selectedTab === 'posts' && (
        <AllPosts id={id} />
      )}
      {selectedTab === 'critics' && (
        <AllCritics id={id} />
      )}
    </View>
  )
}

export default Tabs
