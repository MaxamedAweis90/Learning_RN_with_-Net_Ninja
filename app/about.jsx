import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const About = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>About Page</ThemedText>

      <Link href="/">
      <ThemedText>Go to Home</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    hello: {
    fontSize: 20,
    fontWeight: 'bold',
    }
})