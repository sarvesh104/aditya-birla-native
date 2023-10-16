import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,Image} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = () => {
  return (

<>
    <View style={{flexDirection:"row"}}>
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <FontAwesome name="search" size={24} color="gray" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          style={styles.input}
          // Add your logic to handle search here
          // For example, you can use onChangeText to update a search query state
        />
      </View>
    </View>

    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => handleMenuClick()}>
        <Image source={require('../assets/images/menu.png')}  style={styles.menuIcon} />
      </TouchableOpacity>
    </View>

    </View>



    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 6,
    paddingHorizontal: 10,
    width:280,
    marginLeft:20, marginVertical:10
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    paddingVertical: 10,
  },
  menuContainer: {
    marginLeft: 15, // Adjust the spacing as needed
  },
  menuIcon: {
width:30,
height:24,
    marginTop:22
  },
});

export default SearchBar;
