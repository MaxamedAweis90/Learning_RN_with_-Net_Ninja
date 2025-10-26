import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

// Custom Themed Components
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/spacer'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <ThemedText title={true} style={styles.hello}>Home</ThemedText>
      <Spacer height={20} />
      <Link href="/about">
      <ThemedText>Go to About</ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    hello: {
    fontSize: 20,
    fontWeight: 'bold',
    },
})