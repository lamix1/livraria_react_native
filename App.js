import { StyleSheet, Image, Text, View, Card } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
      <Image
        style={styles.tinyLogo}
        source={require('.assets/dracula-bram-stoker.jpg')}
      />
      <Text>$6790</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});