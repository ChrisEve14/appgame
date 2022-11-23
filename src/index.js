import { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Header } from './components';
import colors from './constants/colors';
import { StartGame, Game, GameOver } from './screens/index';
import { useFonts } from 'expo-font';


export default function App() {

  const [loaded] = useFonts({
    'Indie': require ('../assets/fonts/IndieFlower-Regular.ttf'),
    'Rubik': require ('../assets/fonts/RubikMoonrocks-Regular.ttf'),
    'Satisfy': require ('../assets/fonts/Satisfy-Regular.ttf'),
  });
  
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const onGameOver = (rounds) => {
    setGuessRounds(rounds);
  }

  const onRestart = () => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let content = <StartGame onStartGame={onStartGame} />

  const getTitle = () => {
    let title;
    if(userNumber && guessRounds <= 0) {
      title = 'Guess a Number';
    } else if (guessRounds > 0) {
      title = 'Game Over';
    } else {
      title = 'Welcome';
    }
    return title;
  }

  if (userNumber && guessRounds <= 0) {
    content = <Game selectedNumber={userNumber} onGameOver={onGameOver} />
  } else if (guessRounds > 0) {
    content = <GameOver rounds={guessRounds} selectedNumber={userNumber} onRestart={onRestart} />
  }

  if (!loaded) {
    return (
    <View style={styles.containerLoader}>
      <ActivityIndicator size='large'color={colors.gray} />
    </View>
    )
  };

  return (
    <View style={styles.container}>
      <Header title={getTitle()} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingTop: 60,
  },
  containerLoader: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
