import tw from "twrnc"
import Utils from "../../class/Utils"

const useResponsive = () => {
  const breakpoints = {
    sm: 380,
    md: 420,
    lg: 680,
    tablet: 1024,
  }

  const imagePoster = () => {
    if (breakpoints.tablet) {
      return [
        tw`rounded-md m-4`,
        {
          resizeMode: "cover",
          width: Utils.moderateScale(160),
          height: Utils.moderateScale(260),
        },
      ]
    } else {
      return [tw`rounded-md m-4 w-40 h-60`, { resizeMode: "cover" }]
    }
  }
  return {
    imagePoster,
  }
}

export default useResponsive
