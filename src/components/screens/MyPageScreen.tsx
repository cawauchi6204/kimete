import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { PostCard } from "../common/PostCard";

type Props = {
  Card: any
};

export const MyPageScreen: React.FC<Props> = ({ }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.center, styles.pt30]}>
        <Image style={styles.mypageIcon}
          source={{ uri: `https://pakutaso.cdn.rabify.me/shared/img/page/ookawa201712.jpg?d=500` }} />
        <Text style={[styles.fS32, styles.mt15]}>山田　太郎</Text>
      </View>
      <View>
        <View style={styles.flexRow}>
          <View style={[styles.flex5, styles.m10]}>
            <Text>フォロー数</Text>
          </View>
          <View style={[styles.flex5, styles.m10]}>
            <Text>フォロワー数</Text>
          </View>
        </View>
        <View style={styles.flexRow}>
          <View style={[styles.flex5, styles.m10]}>
            <Text>今までもらったサンキュー数</Text>
          </View>
          <View style={[styles.flex5, styles.m10]}>
            <Text>これまでのプロデュース数</Text>
          </View>
        </View>
      </View>
      <PostCard />
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    marginRight: 30,
    marginLeft: 30
  },
  mypageIcon: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  m10: {
    margin: 10
  },
  mt15: {
    marginTop: 15
  },
  pt30: {
    paddingTop: 30
  },
  fS32: {
    fontSize: 32
  },
  card: {
    borderWidth: 2,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flex5: {
    flex: 5
  },
  center: {
    alignItems: 'center'
  }
});
