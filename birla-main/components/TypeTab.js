import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

const Type = () => {
  const [activeTab, setActiveTab] = useState("Commercial");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => handleTabPress("Commercial")}>
        <View style={{ width: "50%", borderBottomWidth: activeTab === "Commercial" ? 3 : 0 , borderBottomColor:"#850C70"}}>
          <Text style={styles.Text1Style}>
            Commercial
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => handleTabPress("Residential")}>
        <View style={{ width: "50%", borderBottomWidth: activeTab === "Residential" ? 3 : 0 , borderBottomColor:"#850C70"}}>
          <Text style={styles.Text2Style1}>
            Residential
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  Text1Style: {
    padding: 20,
    fontWeight: "600",
    borderBottomColor: "#850C70",
    textAlign: "center"
  },
  Text2Style1: {
    fontWeight: "600",
    borderBottomColor: "#850C70",
    textAlign: "center",
    padding: 20,
  }
});

export default Type;





// import React from "react";
// import { View, Text, StyleSheet } from "react-native";


// const Type = () => {
//     return (
//         <View style={styles.container}>
//             <View style={{ width:"50%", }}>

//                 <Text style={styles.Text1Style}>
//                     Commercial
//                 </Text>
//             </View>

//             <View style={{width:"50%",}}>

//             <Text style={styles.Text2Style1}>
//                 Residential
//             </Text>
//             </View>

//         </View>)
// }





// const styles = StyleSheet.create({
//     container: {
//         // backgroundColor: "yellow",
//         flexDirection: "row",
        
//         // justifyContent: "space-evenly"



//     },
//     Text1Style: {
//         padding: 20,
//         fontWeight:"600",
//         borderBottomColor: "#850C70",
//         borderBottomWidth: 3,

//         textAlign:"center"


//     },
//     Text2Style1: {
//         fontWeight:"600",
//         borderBottomColor: "#850C70",
//         borderBottomWidth: 3,
//         textAlign:"center",
//         padding: 20,
//     }
// });

// export default Type;
