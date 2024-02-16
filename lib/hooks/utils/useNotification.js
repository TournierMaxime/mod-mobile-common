import { useEffect } from 'react'
import * as Notifications from 'expo-notifications'
import registerForPushNotificationsAsync from "../../../lib/components/utils/Notifications"
import { useNavigation } from '@react-navigation/native'

const useNotification = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  })
    
    const navigation = useNavigation()

  useEffect(() => {
    registerForPushNotificationsAsync()

    // Lorsque la notification est reçue alors que l'app est ouverte ou en arrière-plan
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        const data = notification.request.content.data
        handleNotificationRedirect(data.redirect)
      }
    )

    // Lorsque l'utilisateur appuie sur la notification
    const responseSubscription =
      Notifications.addNotificationResponseReceivedListener((response) => {
        const data = response.notification.request.content.data
        handleNotificationRedirect(data.redirect)
      })

    return () => {
      Notifications.removeNotificationSubscription(subscription)
      Notifications.removeNotificationSubscription(responseSubscription)
    }
  }, [])

    const handleNotificationRedirect = (data) => {
      navigation.navigate(data)
  }

    return {
      handleNotificationRedirect
  }
}

export default useNotification
