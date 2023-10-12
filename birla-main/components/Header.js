import React from 'react';
import { View, StyleSheet, Image, Dimensions} from 'react-native';

const Header = () => {
    console.log()
    
   return (
      <View style={styles.container}>

        
      
        <Image style={styles.labelStyle} 
          source={require('../assets/images/logo1.png')}/>
          
     

        
        <Image style={styles.labelStyle1} 
        source={require('../assets/images/noti.png')}/>
        

      </View>
    );
  };


  

  const styles = StyleSheet.create({
    container: {
      width:500,
      height: 90,
      backgroundColor: 'white',
      paddingBottom:20,
      alignItems:"center",
      flexDirection:"row",
      justifyContent:"space-around",

      

    },
    labelStyle: {


        // marginLeft:30,
        // padding:30,
        
    },
    labelStyle1:{
      // alignItems:'right',
      // margin:30
      
      
    }
});

export default Header;















// import { StyleSheet, Text, View, Pressable, Image } from "react-native";
// import React from "react";


// const Header = () => {
//     return (
//         <View style={{ flexDirection: "row", paddingTop: 40, backgroundColor: "aqua" ,justifyContent:"space-between", paddingHorizontal:20,}}>
//             <Image source={require("../assets/images/logo1.png")} style={styles.labelStylex}/>
//             {/* //  width="100px" height="100px"  */}
//             <Image source={require("../assets/images/noti.png")}  />
            
//             {/* width="100px" height="100px" */}
//             {/* <FontAwesome name={headerIcon} size={24} color="red" /> */}
//         </View>

//     )
// }





// const styles = StyleSheet.create({
//     container: {
//       width:500,
//       height: 90,
//       backgroundColor: 'white',
//       paddingBottom:20,
//       alignItems:"center",
//       flexDirection:"row",
//       justifyContent:"space-around",

      

//     },
//     labelStyle: {


//         // marginLeft:30,
//         // padding:30,
        
//     },
//     labelStyle1:{
//       // alignItems:'right',
//       // margin:30
      
      
//     }
// });

// export default Header;