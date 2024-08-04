import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

export default function PrimaryButton(props) {
  return (
    <>
      <View style={styles.buttonOuterContainer}>
        <Pressable
          styles={styles.buttonInnerContainer}
          android_ripple={{ color: colors.primary600 }}
          onPress={props.onPress}
        >
          <Text style={styles.buttonText}>{props.children}</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    backgroundColor: colors.primary500,
  },
  buttonInnerContainer: {},
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
