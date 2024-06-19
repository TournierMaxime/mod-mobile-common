import { AxiosError } from "axios"
import Toast from "react-native-root-toast"

type AsyncFunction = (...args: any[]) => Promise<any>

export const toast = <T extends AsyncFunction>(fn: T): T => {
  return (async (...args: Parameters<T>): Promise<ReturnType<T> | null> => {
    try {
      const result = await fn(...args)

      if (result && result.toastMessage) {
        Toast.show("\u2713 : " + result.toastMessage, {
          duration: Toast.durations.LONG,
          position: Toast.positions.CENTER,
          opacity: 1,
          animation: true,
          backgroundColor: "green",
          textColor: "white",
          textStyle: {
            fontWeight: "normal",
            fontSize: 28,
          },
        })
      }

      return result
    } catch (e: any) {
      console.error(e, e.stack)

      let message = "\u26A0 : "

      if (e instanceof AxiosError) {
        message += e.message

        if (e.response?.data?.errClass) {
          message += ", errClass: " + e.response.data.errClass
        }

        if (e.response?.data?.errMsg) {
          message += ", errMsg: " + e.response.data.errMsg
        }

        if (e.response?.data?.errCode) {
          message += ", errCode: " + e.response.data.errCode
        }
      } else {
        message += e.message
      }

      Toast.show(message, {
        duration: Toast.durations.LONG,
        position: Toast.positions.CENTER,
        animation: true,
        opacity: 1,
        backgroundColor: "red",
        textColor: "white",
        textStyle: {
          fontWeight: "normal",
          fontSize: 28,
        },
      })

      return null
    }
  }) as T
}
