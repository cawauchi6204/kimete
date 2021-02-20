import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { TextInput, Button } from 'react-native-paper'

type Props = {};

export const PostContentScreen: React.FC<Props> = ({ }) => {
  const [place, setPlace] = useState<string>()
  const [member, setMember] = useState<string>()
  const [budget, setBudget] = useState<string>()
  const [content, setContent] = useState<string>()
  return (
    <>
      <ScrollView style={styles.container}>
        <TextInput
          label="場所"
          value={place}
          onChangeText={place => setPlace(place)}
        />
        <TextInput
          label="人数"
          value={member}
          onChangeText={member => setMember(member)}
        />
        <TextInput
          label="予算"
          value={budget}
          onChangeText={budget => setBudget(budget)}
        />
        <TextInput
          label="内容"
          value={content}
          onChangeText={content => setContent(content)}
        />
        <Button
          onPress={() => console.log('hoge')}
        >
          投稿する
        </Button>
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
  container: {}
});
