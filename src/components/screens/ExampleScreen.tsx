import React from "react";
import { View, StyleSheet } from "react-native";

type Props = {};

export const ExampleScreen: React.FC<Props> = ({ }) => {
  return (
    <View style={styles.container}>
      <View />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {}
});
