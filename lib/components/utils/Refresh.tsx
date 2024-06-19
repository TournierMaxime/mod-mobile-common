import React, { useState } from "react"
import { ScrollView, RefreshControl, StyleProp, ViewStyle } from "react-native"
import tw from "twrnc"

interface Props {
  children: React.ReactNode
  onRefresh: () => void
  styles?: string | StyleProp<ViewStyle>
}

const Refresh: React.FC<Props> = ({ children, onRefresh, styles }) => {
  const [refreshing, setRefreshing] = useState<boolean>(false)

  const handleRefresh = async () => {
    setRefreshing(true)
    await onRefresh()
    setRefreshing(false)
  }

  const computedStyle = typeof styles === "string" ? tw`${styles}` : styles

  return (
    <ScrollView
      style={computedStyle}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
      {children}
    </ScrollView>
  )
}

export default Refresh
