import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from "../components/Header";
import Type from '../components/TypeTab';
import SearchBar from '../components/Search';
import BuilderCard from '../components/CommercialCard';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
const Home = () => {
  return (
    <View style={styles.container}>

<Header />

<Type />


<View style={{backgroundColor:"rgb(237, 234, 222)",paddingVertical:10,}}>
<SearchBar />
<ScrollView style={{marginBottom:250}}>

<BuilderCard img = {require('../assets/images/card.png')}/>
<BuilderCard img = {require('../assets/images/card2.png')} />
<BuilderCard img = {require('../assets/images/card2.png')} />
<BuilderCard img = {require('../assets/images/card2.png')} />
<BuilderCard img = {require('../assets/images/card2.png')} />
{/* <BuilderCard img = {require('../assets/images/card2.png')} /> */}
{/* <BuilderCard img = {require('../assets/images/card2.png')} /> */}

</ScrollView>

<NavigationContainer>
    <TabNavigation />
  </NavigationContainer>

</View>






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