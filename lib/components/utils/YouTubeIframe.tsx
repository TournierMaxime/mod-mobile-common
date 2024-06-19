import React from "react"
import YoutubePlayer from "react-native-youtube-iframe"
import Utils from "../../class/Utils"

interface Props {
  videoId: string | undefined
}

const YoutubeIframe: React.FC<Props> = ({ videoId }) => {
  return (
    <YoutubePlayer
      width={Utils.moderateScale(250)}
      height={Utils.moderateScale(250)}
      play={false}
      videoId={videoId}
    />
  )
}

export default YoutubeIframe
