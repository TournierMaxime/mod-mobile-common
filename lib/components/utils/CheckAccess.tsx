import React from "react"
import { Text } from "react-native"

const checkAccess = (
  isLogged: boolean,
  currentUserId: string,
  requiredUserId: string,
) => {
  if (isLogged && currentUserId !== requiredUserId) {
    return <Text>Accès non autorisé</Text>
  }
}

export { checkAccess }
