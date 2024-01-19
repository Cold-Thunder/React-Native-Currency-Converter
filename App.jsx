import React from 'react'
import { StatusBar, StyleSheet, ScrollView, SafeAreaView, View, Text } from 'react-native'
import CurrencyConvert from './src/components/CurrencyConvert';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <CurrencyConvert />
        </View>
        <StatusBar backgroundColor="#4fa282" />
      </ScrollView>
    </SafeAreaView>
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})