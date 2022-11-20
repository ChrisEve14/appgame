import { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Header } from './components';
import colors from './constants/colors';
import { StartGame, Game } from './screens/index';
import { useFonts } from 'expo-font';


export default function App() {

  const [loaded] = useFonts({
    'Indie': require ('../assets/fonts/IndieFlower-Regular.ttf'),
    'Rubik': require ('../assets/fonts/RubikMoonrocks-Regular.ttf'),
    'Satisfy': require ('../assets/fonts/Satisfy-Regular.ttf'),
  });
  
  const [userNumber, setUserNumber] = useState(null);

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGame onStartGame={onStartGame} />
  if (userNumber) {
    content = <Game selectedNumber={userNumber} />;
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
      <Header title={userNumber ? "Let's Play!" : 'Welcome'} />
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
