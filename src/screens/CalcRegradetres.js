import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Platform,
  Button,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  PixelRatio,
  Image,
} from "react-native";

import { horizontalScale, verticalScale } from "./utils/response";
const RegraDeTresSimples = () => {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [valor3, setValor3] = useState("");
  const [resultado, setResultado] = useState("");

  
  const handleCalcular = () => {
    const v1 = parseFloat(valor1);
    const v2 = parseFloat(valor2);
    const v3 = parseFloat(valor3);

    const resultado = (v3 * v2) / v1;
    setResultado(`Resultado: ${resultado.toFixed(2)}`);
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Regra de três simples</Text>
      <View style={styles.inputsContainer}>
<View style={styles.inputContainer}>
  <Text style={styles.inputLabel}>Valor 1</Text>
  <TextInput
    style={styles.input}
    value={valor1}
    onChangeText={setValor1}
    keyboardType="numeric"
    placeholder="Informe o valor"
  />
</View>
<View style={styles.inputContainer}>
  <Text style={styles.inputLabel}>Valor 2</Text>
  <TextInput
    style={styles.input}
    value={valor2}
    onChangeText={setValor2}
    keyboardType="numeric"
    placeholder="Informe o valor"
    
  />
</View>
<View style={styles.inputContainer}>
  <Text style={styles.inputLabel}>Valor 3</Text>
  <TextInput
    style={styles.input}
    value={valor3}
    onChangeText={setValor3}
    keyboardType="numeric"
    placeholder="Informe o valor"
  />
</View>
</View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleCalcular}>
          <Text style={styles.TextButton}>Calcular</Text>
        </TouchableOpacity>
       
      </View>
      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
    textTransform: "uppercase",
    
  },
  containerCalc:{
    width:horizontalScale(400),
    height:verticalScale(200),
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  TextButton: {
    fontSize: 20,
    fontFamily: "Montserrat_400Regular",
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
    fontFamily: "Montserrat_400Regular",
  },
  input: {
    width: horizontalScale(100),
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    width: horizontalScale(120),
    height: verticalScale(60),
    ...Platform.select({
      ios: { backgroundColor: "#00BFFF" },
      android: { backgroundColor: "red" },
    }),
    borderRadius: 20,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  result: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    color: "#333",
  },
});

export default RegraDeTresSimples;
