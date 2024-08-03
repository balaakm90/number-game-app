import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton(props) {
  return (
    <>
      <View style={styles.buttonOuterContainer}>
        <Pressable
          styles={styles.buttonInnerContainer}
          android_ripple={{ color: "#640233" }}
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
    backgroundColor: "#72063c",
  },
  buttonInnerContainer: {},
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
