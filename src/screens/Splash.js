import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>X_Chat</Text>
    </View>
  )
};

export default Splash;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'grey',
        justifyContent:'center',
        alignItems:'center',
    },
    txt:{
        fontSize:40,
        fontWeight:'bold',
        color:'white',
    }
})
