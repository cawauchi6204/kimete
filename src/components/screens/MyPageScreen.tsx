import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native"
import { Card, Title, Paragraph } from 'react-native-paper';
import { PostCard } from "../common/PostCard"

type Props = {
  Card: any
}

export const MyPageScreen: React.FC<Props> = ({ }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.center, styles.pt30]}>
        <Image style={styles.mypageIcon}
          source={{ uri: `https://pakutaso.cdn.rabify.me/shared/img/page/ookawa201712.jpg?d=500` }} />
        <Text style={[styles.fS32, styles.mt15]}>山田　太郎</Text>
      </View>
      <View style={styles.mt50}>
        <View style={[styles.flexRow, styles.justifyContentAround]}>
          <Card style={[styles.w150]}>
            <Card.Content style={styles.center}>
              <Title>フォロー数</Title>
              <Paragraph>100</Paragraph>
            </Card.Content>
          </Card>
          <Card style={styles.w150}>
            <Card.Content style={styles.center}>
              <Title>フォロワー数</Title>
              <Paragraph>100</Paragraph>
            </Card.Content>
          </Card>
        </View>
        <View style={[styles.flexRow, styles.justifyContentAround, styles.mt24]}>
          <Card style={styles.w150}>
            <Card.Content style={styles.center}>
              <Title>サンキュー数</Title>
              <Paragraph>100</Paragraph>
            </Card.Content>
          </Card>
          <Card style={styles.w150}>
            <Card.Content style={styles.center}>
              <Title>プロデュース数</Title>
              <Paragraph>100</Paragraph>
            </Card.Content>
          </Card>
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
  mt24: {
    marginTop: 24
  },
  mt50: {
    marginTop: 50
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
  },
  justifyContentAround: {
    justifyContent: 'space-around',
  },
  w150: {
    width: 150
  },
});
