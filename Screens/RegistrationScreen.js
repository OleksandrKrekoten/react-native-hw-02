import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  Keyboard,
  TouchableOpacity,
} from "react-native";
const initialState = {
  username: "",
  email: "",
  password: "",
};
export const RegistrationScreen = () => {

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [authValue, setAuthValue] = useState(initialState);

  const hidenKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setAuthValue(initialState)
    console.log(authValue);
  };
  
  return (
    <View style={{ ...styles.form, paddingBottom: isShowKeyboard ? 20 : 76 }}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={authValue.username}
          onFocus={() => {
            setIsShowKeyboard(true);
          }}
          onChangeText={(value) =>
            setAuthValue((prev) => ({ ...prev, username: value }))
          }
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="E-mail address"
          value={authValue.email}
          onFocus={() => {
            setIsShowKeyboard(true);
          }}
          onChangeText={(value) =>
            setAuthValue((prev) => ({ ...prev, email: value }))
          }
        />
      </View>
      <View style={{ marginBottom: 43 }}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={authValue.password}
          secureTextEntry={true}
          onFocus={() => {
            setIsShowKeyboard(true);
          }}
          onChangeText={(value) =>
            setAuthValue((prev) => ({ ...prev, password: value }))
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
        <Text style={{ color: "#fff" }}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Have already an account?{" "}
        <Text style={{ fontFamily: "ZenDots" }}>Login</Text>
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
    fontFamily: "ZenDots",
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
