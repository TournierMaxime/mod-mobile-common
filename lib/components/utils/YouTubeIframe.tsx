import React from "react"
import YoutubePlayer from "react-native-youtube-iframe"

interface Props {
  videoId: string
}

const YoutubeIframe: React.FC<Props> = ({ videoId }) => {
  return <YoutubePlayer height={250} play={false} videoId={videoId} />
}

export default YoutubeIframe
