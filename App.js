import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [enteredNumber, setEnteredNumber] = useState();
  const [isFoundNumber, setIsFoundNumber] = useState(false);

  function confirmHandler(number) {
    setEnteredNumber(number);
  }
  function onMatchFoundHandler() {
    setIsFoundNumber(true);
  }

  let screen = <StartGameScreen onPickedNumber={confirmHandler} />;
  if (enteredNumber) {
    screen = (
      <GameScreen
        userNumber={enteredNumber}
        onMatchFound={onMatchFoundHandler}
      />
    );
  }
  if (isFoundNumber) {
    screen = <GameOverScreen />;
  }
  return (
    <>
      <LinearGradient
        colors={[colors.primary800, colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
