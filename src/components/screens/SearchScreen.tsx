import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native"
import { Divider } from "react-native-elements"
import RNPickerSelect from 'react-native-picker-select'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button, TextInput } from 'react-native-paper';

type Props = {
};

export const SearchScreen: React.FC<Props> = ({ }) => {
  const [text, setText]: any = useState()
  const [value, setValue]: any = useState()

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="検索ワード入力"
        value={text}
        onChangeText={text => setText(text)}
        style={[styles.w80, styles.p20, styles.center]}
      />
      <View>
        <View style={styles.flexRow}>
          <Text>カテゴリ</Text>
          <RNPickerSelect
            placeholder={{ label: '選択してください', value: '' }}
            // onValueChange={(value) => setValue({ select: value })}
            onValueChange={(value) => setValue({ select: value })}
            style={pickerSelectStyles}
            items={[
              { label: 'Football', value: 'football' },
              { label: 'Baseball', value: 'baseball' },
              { label: 'Hockey', value: 'hockey' },
            ]}
            Icon={() => <Ionicons name="chevron-down" size={15} color="gray" />} />
        </View>
        <Divider style={{ width: "80%", margin: 20 }} />
      </View>
      <View>
        <View style={styles.flexRow}>
          <Text>人数</Text>
          <RNPickerSelect
            placeholder={{ label: '選択してください', value: '' }}
            // onValueChange={(value) => setValue({ select: value })}
            onValueChange={(value) => setValue({ select: value })}
            style={pickerSelectStyles}
            items={[
              { label: '1人', value: '1人' },
              { label: '2人', value: '2人' },
              { label: '3人', value: '3人' },
            ]}
            Icon={() => <Ionicons name="chevron-down" size={15} color="gray" />} />
        </View>
        <Divider style={{ width: "80%", margin: 20 }} />
      </View>
      <View>
        <View style={[styles.flexRow]}>
          <Text>予算</Text>
          <RNPickerSelect
            placeholder={{ label: '選択してください', value: '' }}
            // onValueChange={(value) => setValue({ select: value })}
            onValueChange={(value) => setValue({ select: value })}
            style={pickerSelectStyles}
            items={[
              { label: '1人', value: '1人' },
              { label: '2人', value: '2人' },
              { label: '3人', value: '3人' },
            ]}
            Icon={() => <Ionicons name="chevron-down" size={15} color="gray" />} />
        </View>
        <Divider style={{ width: "80%", margin: 20 }} />
      </View>
      <View>
        <View style={styles.flexRow}>
          <Text>場所</Text>
          <RNPickerSelect
            placeholder={{ label: '選択してください', value: '' }}
            // onValueChange={(value) => setValue({ select: value })}
            onValueChange={(value) => setValue({ select: value })}
            style={pickerSelectStyles}
            items={[
              { label: '東京', value: 'Tokyo' },
              { label: '茨城', value: 'Ibarakii' },
              { label: '栃木', value: 'Tochigi' },
            ]}
            Icon={() => <Ionicons name="chevron-down" size={15} color="gray" />} />
        </View>
        <Divider style={{ width: "80%", margin: 20 }} />
      </View>
      <Button
        mode="contained"
        compact={true}
        color="orange"
        onPress={() => console.log('Pressed')}
        style={[styles.button, styles.center]}
      >
        検索する
        </Button>
    </View >
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    width: 150,
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
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    padding: 5,
    paddingRight: 20,
  },
  iconContainer: {
    top: 6,
    right: 25,
  },
});
