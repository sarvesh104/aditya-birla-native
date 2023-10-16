import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const BuilderCard = (props) => {
  return (
    <>
    <TouchableOpacity style={styles.card}>
      <View style={{resizeMode:'contain',}}>
        <Image
          source={props.img}
          style={styles.image}
        />
      </View>

      <View style={styles.overlay}>
        {/* <Text style={styles.leadCount}>Click for Leads: 100</Text>
        <TouchableOpacity>
          <Text style={styles.viewOnMap}>View on Map</Text>
        </TouchableOpacity> */}

        <Text style={styles.priceRange}>₹2 Cr - ₹3 Cr</Text>
        <Text style={styles.title}>Birla Niyaara</Text>
        <Text style={styles.address}>14, Dr Annie Besant Rd, Century Bazaar, Prabhadevi, Mumbai, Maharashtra 400025</Text>

        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Carpet Area:</Text>
            <Text style={styles.detailValue}>102 sq/ft</Text>
          </View>
          <View style={styles.detailItem2}>
            <Text style={styles.detailLabel}>Price:</Text>
            <Text style={styles.detailValue}>₹72.9/sqft</Text>
          </View>
        </View>

        <View style={styles.iconsContainer}>
          {/* Add your icon components here */}
          <TouchableOpacity>
            <Image
              source={require("../assets/images/gym.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/dinner.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/car.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/glass.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>


    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
    // marginBottom
  },
  image: {
    marginVertical:10,
    marginHorizontal:10,
    width:310,

    borderRadius: 10,

    height: 130,
  },
  overlay: {
    padding: 10,
  },
  leadCount: {
    fontSize: 16,
  },
  viewOnMap: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
  priceRange: {
    fontSize: 25,
    color:"#850C70",
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical:15
  },
  address: {
    fontSize: 16,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  detailItem: {
    flexDirection: "row",
    backgroundColor:"#FBF8F0",
    paddingHorizontal:10,
    borderRadius:15,
    width:178,alignItems:"center"

  },
  detailItem2: {
    flexDirection: "row",
    backgroundColor:"#FBF8F0",
    paddingHorizontal:6,
    width:128,
    marginHorizontal:5,
    paddingVertical:10,
    borderRadius:15,
    paddingRight:10,
    alignItems:"center"

  },


  detailLabel: {
    marginRight: 5,
    fontSize:16 ,
    fontWeight:"600" 
},
  detailValue: {
    fontWeight: "bold",
    
  },
  iconsContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    marginVertical:15,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default BuilderCard;
