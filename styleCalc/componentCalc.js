import * as React from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../src/screens/utils/response";
import styles from "./index";
import data from "../componets/DataPorcent";

export default function Calc(props) {
  return (
    <View>
      {data.map((data,id) => (
        <View style={styles.viewInputs}>
          <View style={styles.viewGrid}>
            <View style={styles.headergrid}>
              <Text key={data.id} style={{ marginLeft: 30, marginTop: 30 }}>
                {data.first}
              </Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                keyboardType="numeric"
                placeholder="Porcentagem %"
                returnKeyType="next"
                textAlign="center"
                style={styles.input}
              />
            </View>
            <Text key={data.id} style={{ marginLeft: 20, marginTop: 30 }}>
              {data.second}
            </Text>
            <TextInput
              keyboardType="number-pad"
              placeholder="- -"
              textAlign="center"
              style={styles.input}
            />
            <Text key={data.id} style={{ marginLeft: 30, marginTop: 30 }}>
              {data.third}
            </Text>
            <View style={styles.ViewButtons}>
              <TouchableOpacity style={styles.ButtonCalc} title="Calcular">
                <Text style={{ fontWeight: "700" }}>Calcular</Text>
              </TouchableOpacity>
              <View style={styles.ButtonResult}>
                <Text
                  style={{
                    color: "green",
                    fontWeight: "800",
                    fontSize: moderateScale(17),
                  }}
                >
                  resultado
                </Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
