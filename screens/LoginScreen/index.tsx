import ThemeButton from '@/components/ThemedButton'
import { Link } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { StyleSheet } from 'react-native'

const LoginScreen = () => {
  const handleLogin = () => {
    router.replace('/(properties)/(main)/home')
  }
  const [loaded] = useFonts({
    helvetica: require('@/assets/fonts/helvetica.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <View style={style.mainWrapper}>
      <Image
        source={require('@/assets/images/login.png')}
        style={{ marginBottom: 75 }}
      />
      <View style={style.btnWrapper}>
        <ThemeButton
          title="Sign in with Phone Number"
          handleButton={handleLogin}
          styles={style.fontText}
        />
        <ThemeButton
          title="Sign in with Apple ID"
          handleButton={handleLogin}
          type="secondary"
          children={
            <Image
              source={require('@/assets/images/apple.png')}
              style={{ height: 18, width: 18 }}
            />
          }
          styles={style.fontText}
        />
        <Text style={[{ textAlign: 'center' }, style.fontText]}>
          <Text> Don't have an account ?</Text>{' '}
          <Link to={'signup'} style={style.link}>
            Sign up
          </Link>
        </Text>
        <Text
          style={[{ color: '#121212BF', textAlign: 'center', marginTop: 24 }]}
        >
          By creating an account, or signing in, you are agreeing to our{' '}
          <Link to={'/termsservice'} style={style.link}>
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to={'/privacypolicy'} style={style.link}>
            Privacy Policy
          </Link>
          .
        </Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    flexDirection: 'column', // Changed to 'row'
    justifyContent: 'center',
    alignItems: 'center',
    padding: 48,
    position: 'relative',
    backgroundColor: 'white',
  },
  btnWrapper: {
    position: 'absolute',
    flexDirection: 'column',
    gap: 12,
    bottom: 24,
  },
  link: {
    color: '#121212BF',
    textDecorationLine: 'underline',
  },
  fontText: {
    fontFamily: 'helvetica',
  },
})

export default LoginScreen
