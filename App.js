import { StatusBar } from 'expo-status-bar';
import { Box, Center, Heading, NativeBaseProvider } from 'native-base';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './Components/Card';
import { LinearGradient } from 'expo-linear-gradient';
import Greeting from './Components/Greeting';
import TodayReading from './Components/TodayReading';
import AppBar from './Components/AppBar';
import Books from './Components/Books';
import Documentaries from './Components/Documentaries';

export default function App() {
  const config = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
  };
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NativeBaseProvider config={config}>
      <AppBar />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Box mt={'3'} mx={'4'}>
          <Greeting />
          {/* <Documentaries /> */}
          <TouchableOpacity>
            <Card />
          </TouchableOpacity>
          <Books />
          <Box mt={3} mx='2' >
            <Heading size="md" ml="-1">
              Today's reading
            </Heading>
          </Box>
          {/* <TodayReading /> */}

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <TodayReading />
            <TodayReading />
          </ScrollView>
        </Box>
      </ScrollView>

    </NativeBaseProvider >

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
