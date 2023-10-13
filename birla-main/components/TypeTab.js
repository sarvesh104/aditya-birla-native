import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Type = () => {
    return (
        <View style={styles.container}>
            <View style={{ width:"50%", backgroundColor:"green"}}>

                <Text style={styles.Text1Style}>
                    Commercial
                </Text>
            </View>

            <View style={{borderBottomColor:"blue",borderBottomWidth:3, width:"50%", backgroundColor:"pink",}}>

            <Text style={styles.Text2Style1}>
                Residential
            </Text>
            </View>

        </View>)
}





const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        flexDirection: "row",
        // justifyContent: "space-evenly"



    },
    Text1Style: {
        padding: 20,
        borderBottomColor: "red",
        borderBottomWidth: 3,

        textAlign:"center"


    },
    Text2Style1: {

        textAlign:"center",
        padding: 20,
    }
});

export default Type;
