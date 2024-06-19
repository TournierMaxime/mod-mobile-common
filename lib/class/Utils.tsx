import { Dimensions, TouchableOpacity, Text, View } from "react-native"
import tw from "twrnc"

class Utils {
  static ITEM_WIDTH = 280
  static ITEM_HEIGHT = 517

  static getItemLayout = (data: any, index: number) => ({
    length: Utils.ITEM_HEIGHT,
    offset: Utils.ITEM_HEIGHT * index,
    index,
  })

  static getItemLayoutCastCrew = (data: any, index: number) => ({
    length: Utils.ITEM_WIDTH,
    offset: Utils.ITEM_WIDTH * index,
    index,
  })

  static numberWithCommas = (number: number) => {
    let internationalNumberFormat = new Intl.NumberFormat("en-US")
    return internationalNumberFormat.format(number)
  }

  static horizontalScale = (size: number) => {
    const { width } = Dimensions.get("window")
    const guidelineBaseWidth = 375

    return (width / guidelineBaseWidth) * size
  }
  static verticalScale = (size: number) => {
    const { height } = Dimensions.get("window")
    const guidelineBaseHeight = 812

    return (height / guidelineBaseHeight) * size
  }

  static moderateScale = (size: number, factor = 0.5) => {
    return size + (this.horizontalScale(size) - size) * factor
  }

  static extractTweetId = (url: string) => {
    const match = url.match(/status\/(\d+)/)
    return match ? match[1] : null
  }

  static extractYoutubeVideoId = (url: string) => {
    const match = url.match(/embed\/([a-zA-Z0-9_-]+)/)
    return match ? match[1] : null
  }
}

export default Utils
