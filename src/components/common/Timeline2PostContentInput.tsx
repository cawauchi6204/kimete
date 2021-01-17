import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import IonIcon from 'react-native-vector-icons/Ionicons'
type Props = {
  style?:object,
  onPress?:() => void,
  navigation:any
};

export const Timeline2PostContentInput: React.FC<Props> = ({ style,navigation }) => {
  return (
    <View style={[styles.container,style]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>navigation.navigate('MyModal')}
      >
        <IonIcon name="brush-outline" size={40} />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    zIndex: 1
  },
  button: {
    alignItems: "center",
    backgroundColor: "orange",
    padding: 10,
    width: 70,
    height: 70,
    borderRadius: 100
  },
});
