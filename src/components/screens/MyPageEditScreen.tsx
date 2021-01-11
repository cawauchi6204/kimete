import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Button, Text, Image, TextInput } from "react-native";
import { Appbar, DataTable } from 'react-native-paper'

type Props = {};

export const MyPageEditScreen: React.FC<Props> = ({ }) => {
  const [name,setName] = useState<string>()
  const [description,setDescription] = useState<string>()
  const [station,setStation] = useState<string>()
  const [recommendStore1,setRecommendStore1] = useState<string>()
  const [recommendStore2,setRecommendStore2] = useState<string>()
  const [recommendStore3,setRecommendStore3] = useState<string>()
  const [birthday,setBirthday] = useState<string>()
  return (
    <>
      <Appbar.Header style={[styles.color, styles.spaceAround]}>
        <Button
          color="black"
          title="キャンセル"
          onPress={() => console.log('hozon')}
        />
        <Text>変更</Text>
        <Button
          color="black"
          title="保存"
          onPress={() => console.log('hozon')}
        />
      </Appbar.Header>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mt30}>
          <Image style={[styles.mypageIcon, styles.center]}
            source={{ uri: `https://pakutaso.cdn.rabify.me/shared/img/page/ookawa201712.jpg?d=500` }} />
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>タイトル</DataTable.Title>
              <DataTable.Title>表示内容</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>表示名</DataTable.Cell>
              <TextInput
                value={name}
                multiline
                numberOfLines={1}
                onChangeText={name => setName(name)}
                placeholder="名前を入力してください"
              />
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>自己紹介</DataTable.Cell>
              <TextInput
                value={description}
                multiline
                numberOfLines={4}
                onChangeText={description => setDescription(description)}
                placeholder="自己紹介を入力してください"
              />
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>よく使う駅</DataTable.Cell>
              <TextInput
                value={station}
                multiline
                numberOfLines={1}
                onChangeText={station => setStation(station)}
                placeholder="よく使う駅を入力してください"
              />
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>オススメのお店①</DataTable.Cell>
              <TextInput
                value={recommendStore1}
                multiline
                numberOfLines={1}
                onChangeText={recommendStore1 => setRecommendStore1(recommendStore1)}
                placeholder="オススメのお店①を入力してください"
              />
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>オススメのお店②</DataTable.Cell>
              <TextInput
                value={recommendStore2}
                multiline
                numberOfLines={1}
                onChangeText={recommendStore2 => setRecommendStore2(recommendStore2)}
                placeholder="オススメのお店②を入力してください"
              />
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>オススメのお店③</DataTable.Cell>
              <TextInput
                value={recommendStore3}
                multiline
                numberOfLines={1}
                onChangeText={recommendStore3 => setRecommendStore3(recommendStore3)}
                placeholder="オススメのお店③を入力してください"
              />
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>生年月日</DataTable.Cell>
              <TextInput
                value={birthday}
                multiline
                numberOfLines={1}
                onChangeText={birthday => setBirthday(birthday)}
                placeholder="生年月日を入力してください"
              />
            </DataTable.Row>
          </DataTable>
        </View>
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
  container: {},
  color: {
    backgroundColor: '#F9A827'
  },
  loginImage: {
    width: 380,
    height: 213
  },
  w80: {
    width: '80%',
  },
  p20: {
    padding: 20
  },
  center: {
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  button: {
    width: 150,
  },
  fS14: {
    fontSize: 14
  },
  fS32: {
    fontSize: 32
  },
  m20: {
    margin: 20
  },
  cRed: {
    color: 'red'
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  spaceAround: {
    justifyContent: 'space-between'
  },
  mypageIcon: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  mL30: {
    marginLeft: 100
  },
  mt30: {
    marginTop: 30
  }
});
