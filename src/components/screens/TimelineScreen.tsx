import React from "react";
import { View, StyleSheet } from "react-native"

import { PostCardList } from '../common/PostCardList'
import { Timeline2PostContentInput } from '../common/Timeline2PostContentInput'

type Props = {
  navigation:any
};

export const TimelineScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Timeline2PostContentInput
        style={[styles.pAbsolute, styles.top85per, styles.Left75per]}
        onPress={() => navigation.navigate('Home')}
        navigation={navigation}
      />
      <PostCardList />
    </View>
  )
}

const styles = StyleSheet.create({
  pAbsolute: {
    position: 'absolute'
  },
  top85per: {
    top: '85%'
  },
  Left75per: {
    left: '75%'
  }
});
