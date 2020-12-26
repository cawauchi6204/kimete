import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import IonIcon from 'react-native-vector-icons/Ionicons'

type Props = {
};

export const PostCard: React.FC<Props> = ({ }) => {
  return (
    <View style={[styles.container, styles.pt30]}>
      <View style={[styles.flexRow, styles.pb20]}>
        <Image
          style={styles.postIcon}
          source={{ uri: `https://reactnative.dev/img/tiny_logo.png` }}
        />
        <View style={styles.ml30}>
          <View style={styles.flexRow}>
            <Text style={styles.fontGrey}>2時間前</Text>
            <Text style={styles.fontGrey}>2020/12/25:16:40</Text>
          </View>
          <View style={[styles.flexRow, styles.mt5]}>
            <Text style={[styles.fS20, styles.fWB]}>山田太郎</Text>
            <Text style={styles.ml10}>@hogehoge</Text>
          </View>
          <Text style={styles.mt5}>東京都目黒区</Text>
          <View style={[styles.flexRow, styles.mt5]}>
            <Text>人数:<Text style={styles.fWB}>1</Text>人</Text>
            <Text style={styles.ml10}>予算:<Text style={styles.fWB}>500円</Text></Text>
          </View>
          <Text style={styles.mt5}>とりあえず腹を満たしたいとりあえず腹を満たしたいとりあえず腹を満たしたいとりあえず腹を満たしたいとりあえず腹を満たしたいとりあえず腹を満たしたいとりあえず腹を満たしたい</Text>
          <View style={[styles.flexRow, styles.mt5]}>
            <IonIcon name="arrow-redo-outline" size={30} />
            <IonIcon name="heart-outline" size={30} style={styles.ml30} />
            <IonIcon name="share-outline" size={30} style={styles.ml30} />
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
  },
  postIcon: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  ml10: {
    marginLeft:10
  },
  ml30: {
    marginLeft: 30
  },
  pt30: {
    paddingTop: 30
  },
  pb20: {
    paddingBottom: 20
  },
  mt5: {
    marginTop: 5
  },
  fontGrey: {
    color: 'grey'
  },
  fS20: {
    fontSize: 20
  },
  fWB: {
    fontWeight: 'bold'
  },
});
