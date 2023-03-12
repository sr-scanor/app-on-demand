import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
import Calc from "../../styleCalc/componentCalc";
import moderateScale from "./utils/response";

export default function DetailsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "500",
            
            }}
          >
            Opções:
          </Text>

          <Calc />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
