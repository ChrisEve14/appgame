import React from 'react';
import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Card, NumberContainer } from '../../components';
import colors from '../../constants/colors';
import { styles } from './styles';

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if(randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
}

const Game = ({selectedNumber}) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, selectedNumber));

    return (
        <View style={styles.container}>
          <Card style={styles.cardContent}>
            <Text style={styles.title}>Beat me</Text>
            <NumberContainer number={currentGuess} />
            <View style={styles.containerButton}>
                <Button
                    title="Lower"
                    onPress={() => null }
                    color={colors.buttons}
                />
                <Button
                    title="Greater"
                    onPress={() => null }
                    color={colors.buttons}
                />
            </View>
          </Card>
        </View>
    )
}

export default Game;

// style={styles.content}