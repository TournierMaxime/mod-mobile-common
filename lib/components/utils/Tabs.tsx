import React from "react"
import { View, TouchableOpacity } from "react-native"
import ProductionMovie from "@mod/mobile-tmdb/views/Movies/Production"
import ProductionSerie from "@mod/mobile-tmdb/views/Series/Production"
import tw from "twrnc"
import CastMovie from "@mod/mobile-tmdb/views/Movies/CastMovie"
import CastSerie from "@mod/mobile-tmdb/views/Series/CastSerie"
import CrewMovie from "@mod/mobile-tmdb/views/Movies/CrewMovie"
import CrewSerie from "@mod/mobile-tmdb/views/Series/CrewSerie"
import Informations from "@mod/mobile-tmdb/views/People/Informations"
import CastPeople from "@mod/mobile-tmdb/views/People/CastPeople"
import AllSeasons from "@mod/mobile-tmdb/views/Series/AllSeasons"
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons"
import Utils from "../../class/Utils"
import MovieTrailer from "@mod/mobile-tmdb/views/Movies/MovieTrailer"
import SerieTrailer from "@mod/mobile-tmdb/views/Series/SerieTrailer"
import Rate from "@mod/mobile-tmdb/lib/components/Rate"
import SVGImdb from "@mod/mobile-tmdb/lib/components/SVGImdb"
import IMDB from "@mod/mobile-tmdb/views/People/IMDB"
import { useDynamicThemeStyles } from "@mod/mobile-common/styles/theme"
import { useSelector } from "react-redux"
import { RootState } from "store"

interface ExternalIds {
  twitter_id: string
  facebook_id: string
  instagram_id: string
  tiktok_id: string
  youtube_id: string
}

interface CastCrewItem {
  id: number
  name: string
  profile_path: string
  character: string
  job: string
  department: string
}

interface PeopleItem {
  id: number
  original_title: string
  title: string
  poster_path: string
  release_date: string
  character: string
  name: string
  first_air_date: string
}

interface Career {
  cast: PeopleItem[]
}

interface Cast {
  cast: CastCrewItem[]
}

interface Cast {
  crew: CastCrewItem[]
}

interface Props {
  id: number
  movie?: {
    vote_average: number
  }
  serie?: {
    vote_average: number
    id: number
    seasons: []
  }
  people?: {
    biography: string
    imdb_id?: string
  }
  externalIds?: ExternalIds
  t: (key: string) => string
  language: string
  selectedTab: string
  setSelectedTab: (selectedTab: string) => void
  credits?: Cast
  career?: Career
}

const Tabs: React.FC<Props> = ({
  id,
  movie,
  serie,
  people,
  externalIds,
  t,
  language,
  selectedTab,
  setSelectedTab,
  credits,
  career,
}) => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode)
  const { background, colorIcon, activeIcon } = useDynamicThemeStyles(darkMode)

  if (!externalIds || !credits || !career || !serie) {
    return null
  }

  console.log("movie", movie)

  return (
    <View style={tw`h-full`}>
      <View style={tw`flex-row ${background}`}>
        {movie || serie || people ? (
          <TouchableOpacity
            style={tw`flex-1 p-4 items-center`}
            onPress={() => setSelectedTab("about")}
          >
            {selectedTab === "about" ? (
              <Feather
                name="info"
                size={Utils.moderateScale(25)}
                color={activeIcon}
              />
            ) : (
              <Feather
                name="info"
                size={Utils.moderateScale(25)}
                color={colorIcon}
              />
            )}
          </TouchableOpacity>
        ) : null}
        {movie ? (
          <TouchableOpacity
            style={tw`flex-1 p-4 items-center`}
            onPress={() => setSelectedTab("cast")}
          >
            {selectedTab === "cast" ? (
              <MaterialCommunityIcons
                name="movie-open-star-outline"
                size={Utils.moderateScale(25)}
                color={activeIcon}
              />
            ) : (
              <MaterialCommunityIcons
                name="movie-open-star-outline"
                size={Utils.moderateScale(25)}
                color={colorIcon}
              />
            )}
          </TouchableOpacity>
        ) : serie ? (
          <TouchableOpacity
            style={tw`flex-1 p-4 items-center`}
            onPress={() => setSelectedTab("cast")}
          >
            {selectedTab === "cast" ? (
              <MaterialCommunityIcons
                name="movie-open-star-outline"
                size={Utils.moderateScale(25)}
                color={activeIcon}
              />
            ) : (
              <MaterialCommunityIcons
                name="movie-open-star-outline"
                size={Utils.moderateScale(25)}
                color={colorIcon}
              />
            )}
          </TouchableOpacity>
        ) : null}
        {movie ? (
          <TouchableOpacity
            style={tw`flex-1 p-4 items-center`}
            onPress={() => setSelectedTab("crew")}
          >
            {selectedTab === "crew" ? (
              <MaterialCommunityIcons
                name="movie-open-cog-outline"
                size={Utils.moderateScale(25)}
                color={activeIcon}
              />
            ) : (
              <MaterialCommunityIcons
                name="movie-open-cog-outline"
                size={Utils.moderateScale(25)}
                color={colorIcon}
              />
            )}
          </TouchableOpacity>
        ) : serie ? (
          <TouchableOpacity
            style={tw`flex-1 p-4 items-center`}
            onPress={() => setSelectedTab("crew")}
          >
            {selectedTab === "crew" ? (
              <MaterialCommunityIcons
                name="movie-open-cog-outline"
                size={Utils.moderateScale(25)}
                color={activeIcon}
              />
            ) : (
              <MaterialCommunityIcons
                name="movie-open-cog-outline"
                size={Utils.moderateScale(25)}
                color={colorIcon}
              />
            )}
          </TouchableOpacity>
        ) : null}
        {people ? (
          <TouchableOpacity
            style={tw`flex-1 p-4 items-center`}
            onPress={() => setSelectedTab("cast")}
          >
            {selectedTab === "cast" ? (
              <MaterialCommunityIcons
                name="movie-open-star-outline"
                size={Utils.moderateScale(25)}
                color={activeIcon}
              />
            ) : (
              <MaterialCommunityIcons
                name="movie-open-star-outline"
                size={Utils.moderateScale(25)}
                color={colorIcon}
              />
            )}
          </TouchableOpacity>
        ) : null}
        {serie ? (
          <TouchableOpacity
            style={tw`flex-1 p-4 items-center`}
            onPress={() => setSelectedTab("seasons")}
          >
            {selectedTab === "seasons" ? (
              <MaterialIcons
                name="play-circle-outline"
                size={Utils.moderateScale(28)}
                color={activeIcon}
              />
            ) : (
              <MaterialIcons
                name="play-circle-outline"
                size={Utils.moderateScale(28)}
                color={colorIcon}
              />
            )}
          </TouchableOpacity>
        ) : null}
        {movie ? (
          <TouchableOpacity
            style={tw`flex-1 p-4 items-center`}
            onPress={() => setSelectedTab("trailer")}
          >
            {selectedTab === "trailer" ? (
              <Feather
                name="video"
                size={Utils.moderateScale(28)}
                color={activeIcon}
              />
            ) : (
              <Feather
                name="video"
                size={Utils.moderateScale(28)}
                color={colorIcon}
              />
            )}
          </TouchableOpacity>
        ) : null}
        {serie ? (
          <TouchableOpacity
            style={tw`flex-1 p-4 items-center`}
            onPress={() => setSelectedTab("trailer")}
          >
            {selectedTab === "trailer" ? (
              <Feather
                name="video"
                size={Utils.moderateScale(28)}
                color={activeIcon}
              />
            ) : (
              <Feather
                name="video"
                size={Utils.moderateScale(28)}
                color={colorIcon}
              />
            )}
          </TouchableOpacity>
        ) : null}
        {movie ? (
          <View style={tw`flex-1 p-4 items-center`}>
            <Rate rate={movie?.vote_average} />
          </View>
        ) : serie ? (
          <View style={tw`flex-1 p-4 items-center`}>
            <Rate rate={serie?.vote_average} />
          </View>
        ) : null}
        {people ? (
          <TouchableOpacity
            style={tw`flex-1 p-4 items-center`}
            onPress={() => setSelectedTab("imdb")}
          >
            <SVGImdb />
          </TouchableOpacity>
        ) : null}
      </View>
      {selectedTab === "about" &&
        (movie ? (
          <ProductionMovie movie={movie} language={language} t={t} />
        ) : selectedTab === "about" && serie ? (
          <ProductionSerie serie={serie} t={t} />
        ) : selectedTab === "about" && people ? (
          <Informations t={t} externalIds={externalIds} people={people} />
        ) : null)}
      {selectedTab === "cast" && movie ? (
        <CastMovie credits={credits} />
      ) : selectedTab === "cast" && serie ? (
        <CastSerie credits={credits} />
      ) : null}
      {selectedTab === "crew" && movie ? (
        <CrewMovie credits={credits} />
      ) : selectedTab === "crew" && serie ? (
        <CrewSerie credits={credits} />
      ) : null}
      {selectedTab === "cast" && people ? <CastPeople career={career} /> : null}
      {selectedTab === "seasons" && serie ? <AllSeasons serie={serie} /> : null}
      {selectedTab === "trailer" && movie ? <MovieTrailer id={id} /> : null}
      {selectedTab === "trailer" && serie ? <SerieTrailer id={id} /> : null}
      {selectedTab === "imdb" && people ? <IMDB people={people} /> : null}
    </View>
  )
}

export default Tabs
