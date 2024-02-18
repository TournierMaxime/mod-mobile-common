import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import registerForPushNotificationsAsync from '../../../lib/components/utils/Notifications';
import { useNavigation } from '@react-navigation/native';

const useNotification = () => {
  const navigation = useNavigation();

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });

    // Enregistrer pour les notifications push dès le chargement du composant
    registerForPushNotificationsAsync();

    // Vérifier si l'app a été ouverte par une notification
    const checkInitialNotification = async () => {
      const initialNotification = await Notifications.getLastNotificationResponseAsync();

      if (initialNotification) {
        const { data } = initialNotification.notification.request.content;
        handleNotificationRedirect(data.redirect);
      }
    };

    checkInitialNotification();

    // Ajouter un écouteur pour les notifications reçues pendant que l'app est ouverte ou en arrière-plan
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      const data = notification.request.content.data;
      handleNotificationRedirect(data.redirect);
    });

    // Ajouter un écouteur pour les réponses aux notifications (l'utilisateur appuie sur la notification)
    const responseSubscription = Notifications.addNotificationResponseReceivedListener(response => {
      const data = response.notification.request.content.data;
      handleNotificationRedirect(data.redirect);
    });

    // Nettoyer les écouteurs lors du démontage du composant
    return () => {
      Notifications.removeNotificationSubscription(subscription);
      Notifications.removeNotificationSubscription(responseSubscription);
    };
  }, []);

  const handleNotificationRedirect = (redirect) => {
    console.log('handleNotificationRedirect', redirect);
    if (redirect) {
      navigation.navigate(redirect);
    }
  };
};

export default useNotification;
