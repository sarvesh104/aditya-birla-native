import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from "../components/Header";
import Type from '../components/TypeTab';
import SearchBar from '../components/Search';

const Home = () => {
  return (
    <View style={styles.container}>

<Header />

<Type />

<SearchBar />



      <Text style={{color:"red"}}>hii sarvesh</Text>
      {/* <StatusBar style="auto" /> */}

      <Text>
        helooo
      </Text>
      {/* <Image source={require("../assets/images/logo1.png")} width="100px" height="100px" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default Home;