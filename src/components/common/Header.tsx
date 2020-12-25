import React from "react";
import { StyleSheet, Text, Image,SafeAreaView } from "react-native";

type Props = {};

export const Header: React.FC<Props> = ({ }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Logo}>KIMETÉ</Text>
      <Image
        style={styles.profileImage}
        source={{ uri: `https://reactnative.dev/img/tiny_logo.png` }} />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  Logo: {
    fontSize:25,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius:50
  },
});
