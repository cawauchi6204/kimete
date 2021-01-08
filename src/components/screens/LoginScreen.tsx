import React, { useState } from "react";
import { StyleSheet, Image, Text,View } from "react-native";
import { TextInput, Button } from 'react-native-paper'

type Props = {};

export const LoginScreen: React.FC<Props> = ({ }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View>
      <Image
        style={[styles.loginImage, styles.center]}
        source={require('../../../assets/undraw_breakfast_psiw.png')}
      />
      <Text style={[styles.center,styles.fS32,styles.m20]}>KIMETÉ</Text>
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          label="メールアドレス"
          value={email}
          onChangeText={email => setEmail(email)}
          style={[styles.w80, styles.p20, styles.center]}
        />
        <TextInput
          mode="outlined"
          label="パスワード"
          value={password}
          onChangeText={password => setPassword(password)}
          style={[styles.w80, styles.p20, styles.center]}
        />
        <Button
          mode="contained"
          color="#F9A827"
          style={[styles.button,styles.center]}
          onPress={() =>console.log('signin!!')}
        >SIGN IN</Button>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {},
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
  fS32: {
    fontSize: 32
  },
  m20: {
    margin: 20
  },
});
