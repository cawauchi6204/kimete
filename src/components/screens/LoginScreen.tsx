import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { TextInput, Button, Checkbox } from 'react-native-paper'

import { signUpByEmail } from '../firebase'

type Props = {};

export const LoginScreen: React.FC<Props> = ({ }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isEmailError, setIsEmailError] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [hidePassword, setHidePassword] = useState(true)

  useEffect(() => {
    validateEmail(email)
    validatePassword(password)
    const disabled = validateEmail(email) && validatePassword(password)
    setDisabled(!disabled)
  }, [email, password])

  const validateEmail = (_email: string): boolean => {
    if (email.length === 0) return false
    const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/

    if (reg.test(_email)) {
      setIsEmailError(false)
      return true
    } else {
      setIsEmailError(true)
      return false
    }
  }

  const validatePassword = (_password: string): boolean => {
    if (password.length === 0) return false
    const reg = /^[a-z\d]{8,100}$/i //半角英数字8文字以上100文字以下

    if (reg.test(_password)) {
      setIsPasswordError(false)
      return true
    } else {
      setIsPasswordError(true)
      return false
    }
  }

  const handleSignUp = (_email: string, _password: string) => {
    signUpByEmail(_email, _password)
    setEmail('')
    setPassword('')
  }

  const toggleShowPassword = () => {
    setHidePassword(!hidePassword)
  }

  return (
    <View>
      <Image
        style={[styles.loginImage, styles.center]}
        source={require('../../../assets/undraw_breakfast_psiw.png')}
      />
      <Text style={[styles.center, styles.fS32, styles.m20]}>KIMETÉ</Text>
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          label="メールアドレス"
          value={email}
          onChangeText={email => setEmail(email)}
          style={[styles.w80, styles.p20, styles.center]}
          onBlur={() => validateEmail(email)}
        />
        {isEmailError && <Text style={[styles.cRed, styles.center]}>メールアドレスの形式が正しくありません</Text>}
        <TextInput
          mode="outlined"
          label="パスワード"
          value={password}
          onChangeText={password => setPassword(password)}
          style={[styles.w80, styles.p20, styles.center]}
          onBlur={() => validatePassword(password)}
          secureTextEntry={hidePassword}
        />
        <View style={[styles.center,styles.flexRow]}>
          <span>パスワードを表示する</span>
          <Checkbox
            status={hidePassword ? 'unchecked' : 'checked'}
            onPress={() => toggleShowPassword()}
            uncheckedColor="#F9A827"
            color="#F9A827"
          />
        </View>
        {isPasswordError && <Text style={[styles.cRed, styles.center]}>パスワードは半角英数で8文字以上で入力してください</Text>}
        <Button
          mode="contained"
          color="#F9A827"
          style={[styles.button, styles.center]}
          onPress={() => handleSignUp(email, password)}
          disabled={disabled}
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
  cRed: {
    color: 'red'
  },
  flexRow: {
    display:'flex',
    flexDirection: 'row'
  }
});
