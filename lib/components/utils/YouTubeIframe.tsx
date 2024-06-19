import React from "react"
import YoutubePlayer from "react-native-youtube-iframe"
import Utils from "../../class/Utils"
import useResponsive from "../../hooks/utils/useResponsive"

interface Props {
  videoId: string | undefined
}

const YoutubeIframe: React.FC<Props> = ({ videoId }) => {
  const { trailer } = useResponsive()
  return (
    <YoutubePlayer
      width={trailer.dimension.w}
      height={trailer.dimension.h}
      play={false}
      videoId={videoId}
    />
  )
}

export default YoutubeIframe
