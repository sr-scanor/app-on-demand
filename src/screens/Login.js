import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";

  export default function HomeScreen({navigation}) {
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require("../../image/image.png")}
            resizeMode="center"
          />
        </View>
        <View style={styles.ViewInput}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#000"
            autoCorrect={false}
            keyboardType="email-address"
            autoCompleteType="email"
            keyboardAppearance="dark"
          />
          <TextInput
            style={styles.input}
            returnKeyType="done"
            placeholder="Senha"
            placeholderTextColor="#000"
            autoCorrect={false}
            keyboardAppearance="dark"
          />
        </View>
        <View style={styles.Button}>
          <TouchableOpacity style={styles.buttonEntrar}
        onPress={() => {navigation.navigate("CalcRegradeTres")}}
          >
            <Text style={styles.TextoButton}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.1,
  },
  buttonEntrar: {
    width: 100,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 50,
    marginTop: 30,
    backgroundColor: "#FF8C00",
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  ViewInput: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.3,
  },
  input: {
    width: 300,
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    borderWidth: 1,
    justifyContent: "center",
    borderColor: "black",
  },
  TextoButton: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    paddingHorizontal: 16,
  },
});
