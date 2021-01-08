import React from "react";
import { ScrollView, StyleSheet, Text, Image } from "react-native";
import { Avatar, Card, IconButton } from 'react-native-paper';
import { Divider } from 'react-native-elements'

type Props = {};

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
]

export const NotificationScreen: React.FC<Props> = ({ }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Card.Title
        title="hogehogeさんにフォローされました"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
      />
      <Divider />
      <Card.Title
        title="hogehogeさんからプロデュースされました"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
      />
      <Divider />
      <Card.Title
        title="hogehogeさんからプロデュースされました"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
      />
      <Divider />
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    marginRight: 30,
    marginLeft: 30
  }
});
