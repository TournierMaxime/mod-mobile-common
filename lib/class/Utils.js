import { Dimensions, TouchableOpacity, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"

class Utils {
  static ITEM_WIDTH = 280
  static ITEM_HEIGHT = 517

  static getItemLayout = (data, index) => ({
    length: Utils.ITEM_HEIGHT,
    offset: Utils.ITEM_HEIGHT * index,
    index,
  })

  static getItemLayoutCastCrew = (data, index) => ({
    length: Utils.ITEM_WIDTH,
    offset: Utils.ITEM_WIDTH * index,
    index,
  })

  static numberWithCommas = (number) => {
    let internationalNumberFormat = new Intl.NumberFormat("en-US")
    return internationalNumberFormat.format(number)
  }

  static horizontalScale = (size) => {
    const { width } = Dimensions.get("window")
    const guidelineBaseWidth = 375

    return (width / guidelineBaseWidth) * size
  }
  static verticalScale = (size) => {
    const { height } = Dimensions.get("window")
    const guidelineBaseHeight = 812

    return (height / guidelineBaseHeight) * size
  }

  static moderateScale = (size, factor = 0.5) => {
    return size + (this.horizontalScale(size) - size) * factor
  }

  static truncateText(content, maxLength) {
    if (typeof content !== "string") {
      return { truncatedText: "", isTruncated: false }
    }

    let length = 0
    let truncatedText = ""
    for (const char of content) {
      const code = char.charCodeAt(0)
      length += code < 0x10000 ? 1 : 2
      if (length > maxLength) {
        return { truncatedText: truncatedText + "... ", isTruncated: true }
      }
      truncatedText += char
    }

    return { truncatedText, isTruncated: false }
  }

  static truncateOverview(content, handleModal, t, textOverview, maxLength) {
    const { truncatedText, isTruncated } = this.truncateText(content, maxLength)

    return (
      <View style={tw`flex flex-col`}>
        <Text style={textOverview}>{truncatedText}</Text>
        {isTruncated && (
          <View style={tw`relative`}>
            <TouchableOpacity
              style={[
                tw`absolute text-center items-center justify-center bottom-0 right-0 rounded-sm`,
                {
                  backgroundColor: "#dee2e6",
                  width: this.moderateScale(80),
                  height: this.moderateScale(25),
                },
              ]}
              onPress={handleModal}
            >
              <Text
                style={{ color: "#495057", fontSize: this.moderateScale(14) }}
              >
                {t("utils.more")}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }

  static extractTweetId = (url) => {
    const match = url.match(/status\/(\d+)/)
    return match ? match[1] : null
  }

  static extractYoutubeVideoId = (url) => {
    const match = url.match(/embed\/([a-zA-Z0-9_-]+)/)
    return match ? match[1] : null
  }
}

export default Utils
