import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import colors from "../constants/colors";

export default function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  function changeTextHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    const value = parseInt(enteredNumber);
    if (isNaN(value) || value <= 0 || value > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be number between 1 and 99",
        [
          {
            text: "Ok",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }
    onPickedNumber(value);
  }
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={changeTextHandler}
        />
        <View style={styles.buttonsContainer}>
          <View styles={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View styles={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    color: colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
