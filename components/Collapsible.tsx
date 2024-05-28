import Ionicons from '@expo/vector-icons/Ionicons'
import { PropsWithChildren, useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Colors } from '@/constants/Colors'
import ImageBgChange from './ImageBgChange'

export function Collapsible({
  children,
  subTitle,
  image,
  imageBg,
  title,
}: PropsWithChildren & {
  title: string
  subTitle: string
  image: React.ReactNode
  imageBg?: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useColorScheme() ?? 'light'

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        <View style={{ alignItems: 'center', gap: 12, flexDirection: 'row' }}>
          {imageBg === false ? image : <ImageBgChange children={image} />}
          <View>
            <ThemedText style={styles.title}>{title}</ThemedText>
            <ThemedText style={styles.subTitle}>{subTitle}</ThemedText>
          </View>
        </View>
        <Ionicons
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={18}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
        />
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 15,
    gap: 6,
    justifyContent: 'space-between',
  },
  title: {
    color: '#121212',
    fontSize: 15,
  },
  subTitle: {
    color: '#12121259',
    fontSize: 10,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
})
