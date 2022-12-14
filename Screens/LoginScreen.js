import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Keyboard
} from "react-native";
const initialState = {
  email: "",
  password: "",
};
export const LoginScreen = () => {
  
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [loginValue, setloginValue] = useState(initialState);
     const hidenKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setloginValue(initialState);
    console.log(loginValue);
  };
  return (
    <View style={{ ...styles.form, paddingBottom: isShowKeyboard ? 20 : 132 }}>
      <Text style={styles.title}>Sign In</Text>

      <View style={{ marginBottom: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="E-mail address"
          value={loginValue.email}
          onFocus={() => {
            setIsShowKeyboard(true);
          }}
          onChangeText={(value) =>
            setloginValue((prev) => ({ ...prev, email: value }))
          }
        />
      </View>
      <View style={{ marginBottom: 43 }}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={loginValue.password}
          secureTextEntry={true}
          onFocus={() => {
            setIsShowKeyboard(true);
          }}
          onChangeText={(value) =>
            setloginValue((prev) => ({ ...prev, password: value }))
          }
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => {
          hidenKeyboard();
        }}
      >
        <Text style={{ color: "#fff" }}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Not a member?<Text style={{ fontFamily: "ZenDots" }}> Sign Up</Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 32,
    paddingTop: 92,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontFamily:"ZenDots",
    textAlign: "center",
    color: "#212121",
    fontSize: 30,
    marginBottom: 33,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    color: "#212121",
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
    paddingLeft: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    marginBottom: 16,
  },
  text: {
    textAlign: "center",
    color: "#1B4371",
  },
});
