import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../src/screens/utils/response";

const styles = StyleSheet.create({
    viewInputs: {
       
        width: horizontalScale(400),
        height: verticalScale(200),
        justifyContent: "center",
        marginTop: 180,
    },
    viewGrid:
    {
        width: horizontalScale(350),
        height: verticalScale(350),
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: "black",
        marginLeft: 10,

        marginTop:20,
        maxWidth:horizontalScale(350)
    },
    headergrid: {
        flex:0.4 ,flexDirection:'row',alignItems:'center'
    },
    Viewresult:
    {
        borderWidth: 0.5,
        width: horizontalScale(200),
        height: verticalScale(50),
        borderRadius: 10,
        borderColor: "#708090",
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    ButtonCalc:
    {
        width: horizontalScale(100),
                    height: verticalScale(50),
                    backgroundColor: "#87CEFA",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                    marginLeft: 20,
    },
    input:
    {
        borderWidth: 0.5,
                    width: horizontalScale(120),
                    height: verticalScale(40),
                    marginLeft: 20,
                    marginTop: 10,
                    borderRadius: 10,
                    alignItems: "center",
    },
    ViewButtons:
    {
        flexDirection: "row",
        flex: 0.5,
        alignItems: "center",
        marginTop: 20,
    },
    ButtonResult:
{
            borderWidth: 0.5,
            width: horizontalScale(200),
            height: verticalScale(50),
            borderRadius: 10,
            borderColor: "#708090",
            marginLeft: 20,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          
    }

});

export default styles;
