import tw from "twrnc"
import Utils from "../../class/Utils"
import { Dimensions } from "react-native"

const useResponsive = () => {
  const breakpoints = {
    sm: 380,
    md: 420,
    lg: 680,
    tablet: 1024,
  }

  const { width } = Dimensions.get("window")

  const imageArticle = () => {
    if (width >= breakpoints.tablet) {
      return [tw`w-full h-99 mt-4 rounded-md`, { objectFit: "cover" }]
    } else {
      return [tw`w-90 h-50 mt-4 rounded-md`, { objectFit: "cover" }]
    }
  }

  const imagePoster = () => {
    if (width >= breakpoints.tablet) {
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

  const imagePosterFavorite = () => {
    if (width >= breakpoints.tablet) {
      return [tw`w-60 m-2 h-90 rounded-md`, { objectFit: "cover" }]
    } else {
      return [tw`w-15 m-2 h-25 rounded-md`, { objectFit: "cover" }]
    }
  }

  const imageDetails = () => {
    if (width >= breakpoints.tablet) {
      return [tw`w-70 h-90 rounded-t-md`, { resizeMode: "cover" }]
    } else {
      return [tw`w-40 h-60 rounded-t-md`, { resizeMode: "cover" }]
    }
  }

  const imagePosterHorizontal = () => {
    if (width >= breakpoints.tablet) {
      return tw`w-60 h-90 rounded-md mt-4 ml-4 mb-4`
    } else {
      return tw`w-30 h-50 rounded-md mt-4 ml-4 mb-4`
    }
  }

  const fontSize = (text) => {
    if (width >= breakpoints.tablet) {
      return tw`font-medium text-2xl ${text}`
    } else {
      return tw`font-medium text-lg ${text}`
    }
  }

  const authBtn = () => {
    if (width >= breakpoints.tablet) {
      return tw`font-medium text-2xl`
    } else {
      return tw`font-medium text-lg`
    }
  }

  const notifications = (text) => {
    if (width >= breakpoints.tablet) {
      return tw`font-medium text-3xl mt-2 px-4 py-2 ${text}`
    } else {
      return tw`font-medium text-lg ${text}`
    }
  }

  const notRegistered = (text) => {
    if (width >= breakpoints.tablet) {
      return tw`font-medium text-2xl text-center my-2 ${text}`
    } else {
      return tw`font-medium text-lg text-center my-2 ${text}`
    }
  }

  const forgotYourPassword = (text) => {
    if (width >= breakpoints.tablet) {
      return tw`mt-4 mb-8 text-2xl font-medium text-center ${text}`
    } else {
      return tw`mt-4 mb-8 text-lg font-medium text-center ${text}`
    }
  }

  const deleteAccount = (text) => {
    if (width >= breakpoints.tablet) {
      return tw`font-medium text-2xl ${text} text-red-500`
    } else {
      return tw`font-medium text-lg ${text} text-red-500`
    }
  }

  const widthAspectRatio = () => {
    if (width >= breakpoints.tablet) {
      return tw`w-6/12`
    } else {
      return tw`w-10/12`
    }
  }

  const placeholder = () => {
    if (width >= breakpoints.tablet) {
      return tw`my-2 px-3 py-2 text-gray-500 text-2xl bg-slate-100 rounded-md`
    } else {
      return tw`my-2 px-3 py-2 text-gray-500 text-lg bg-slate-100 rounded-md`
    }
  }

  const btnSubmit = () => {
    if (width >= breakpoints.tablet) {
      return tw`px-4 py-2 text-white text-2xl font-medium`
    } else {
      return tw`px-4 py-2 text-white text-xl font-medium`
    }
  }

  const headTitle = (text) => {
    if (width >= breakpoints.tablet) {
      return tw`font-medium text-2xl ml-4 mt-4 ${text}`
    } else {
      return tw`font-medium text-xl ml-4 mt-4 ${text}`
    }
  }

  const articleListTitle = (text, borderColor) => {
    if (width >= breakpoints.tablet) {
      return tw`${text} font-normal text-3xl leading-normal text-justify w-full ${borderColor}`
    } else {
      return tw`${text} font-normal text-xl leading-normal text-justify w-full ${borderColor}`
    }
  }

  const articleTitle = (text) => {
    if (width >= breakpoints.tablet) {
      return tw`${text} font-medium text-4xl text-justify leading-normal`
    } else {
      return tw`${text} font-medium text-xl text-justify leading-normal`
    }
  }

  const articleIntro = (text) => {
    if (width >= breakpoints.tablet) {
      return tw`${text} italic text-3xl mt-4 text-justify leading-normal`
    } else {
      return tw`${text} italic text-lg mt-4 text-justify leading-normal`
    }
  }

  const articleParagraph = (text) => {
    if (width >= breakpoints.tablet) {
      return tw`${text} font-normal text-3xl mt-4 text-justify leading-normal`
    } else {
      return tw`${text} font-normal text-lg mt-4 text-justify leading-normal`
    }
  }

  const articleUpdate = (text) => {
    if (width >= breakpoints.tablet) {
      return tw`${text} font-normal text-3xl mt-4`
    } else {
      return tw`${text} font-normal text-lg mt-4`
    }
  }

  const privacyPolicyTitle = (text) => {
    if (width >= breakpoints.tablet) {
      return tw`${text} font-medium text-4xl text-justify leading-normal mb-4`
    } else {
      return tw`${text} font-medium text-xl text-justify leading-normal mb-4`
    }
  }

  const privacyPolicySubTitle = (text) => {
    if (width >= breakpoints.tablet) {
      return tw`${text} font-medium text-3xl mb-4 text-justify leading-normal`
    } else {
      return tw`${text} font-medium text-lg mb-4 text-justify leading-normal`
    }
  }

  const privacyPolicyParagraph = (text) => {
    if (width >= breakpoints.tablet) {
      return tw`${text} font-normal text-3xl mb-4 text-justify leading-normal`
    } else {
      return tw`${text} font-normal text-lg mb-4 text-justify leading-normal`
    }
  }

  const privacyPolicyList = (text) => {
    if (width >= breakpoints.tablet) {
      return tw`font-normal text-3xl ${text} my-px px-4 leading-normal`
    } else {
      return tw`font-normal text-lg ${text} my-px px-4 leading-normal`
    }
  }

  const privacyPolicyUpdate = (text) => {
    if (width >= breakpoints.tablet) {
      return tw`${text} font-normal text-3xl mb-4`
    } else {
      return tw`${text} font-normal text-lg mb-4`
    }
  }

  const backDropPoster = () => {
    if (width >= breakpoints.tablet) {
      return tw`flex relative w-full h-80`
    } else {
      return tw`flex relative w-full h-50`
    }
  }

  const mediaTitle = () => {
    if (width >= breakpoints.tablet) {
      return tw`font-medium text-3xl text-white py-2 px-4 w-full`
    } else {
      return tw`font-medium text-lg text-white py-2 px-4 w-full`
    }
  }

  const accordionContent = () => {
    if (width >= breakpoints.tablet) {
      return [
        tw`font-medium text-2xl rounded-md ml-4 mr-auto my-2 w-auto py-2 px-4 text-center leading-7`,
        { color: "#495057", backgroundColor: "#dee2e6" },
      ]
    } else {
      return [
        tw`font-medium text-lg rounded-md ml-4 mr-auto my-2 w-auto py-2 px-4 text-center leading-7`,
        { color: "#495057", backgroundColor: "#dee2e6" },
      ]
    }
  }

  const plotAndBio = (text) => {
    if (width >= breakpoints.tablet) {
      return tw`${text} font-medium text-2xl rounded-md mr-auto my-2 w-auto px-4 text-justify leading-7`
    } else {
      return tw`${text} font-medium text-lg rounded-md mr-auto my-2 w-auto px-4 text-justify leading-7`
    }
  }

  const detailsRole = (text) => {
    if (width >= breakpoints.tablet) {
      return tw`font-medium text-xl px-4 text-justify leading-7 ${text}`
    } else {
      return tw`font-medium text-base px-4 text-justify leading-7 ${text}`
    }
  }

  const cardDetails = (text) => {
    if (width >= breakpoints.tablet) {
      return tw`border-b border-r border-l border-slate-200 rounded-b-md max-w-90 h-40`
    } else {
      return tw`border-b border-r border-l border-slate-200 rounded-b-md max-w-90 h-30`
    }
  }

  return {
    cardDetails,
    imageArticle,
    authBtn,
    detailsRole,
    imageDetails,
    plotAndBio,
    accordionContent,
    mediaTitle,
    backDropPoster,
    imagePoster,
    imagePosterFavorite,
    imagePosterHorizontal,
    fontSize,
    deleteAccount,
    notRegistered,
    forgotYourPassword,
    widthAspectRatio,
    placeholder,
    btnSubmit,
    headTitle,
    articleListTitle,
    articleTitle,
    articleIntro,
    articleParagraph,
    articleUpdate,
    privacyPolicyTitle,
    privacyPolicySubTitle,
    privacyPolicyParagraph,
    privacyPolicyList,
    privacyPolicyUpdate,
    notifications,
  }
}

export default useResponsive
