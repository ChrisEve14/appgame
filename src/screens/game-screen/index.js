import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
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

const Game = ({selectedNumber, onGameOver}) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, selectedNumber));
    const [rounds, setRound] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const onHandleNextGuess = (direction) => {
        if(
            direction === 'lower' && currentGuess < selectedNumber ||
            direction === 'greater' && currentGuess > selectedNumber
        ) {
            Alert.alert('Don\'t lie', 'You know that this is wrong', [{text: "Sorry", style: 'cancel'}]);
            return;
        }
        if(direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRound(currentRounds => currentRounds + 1);
    }

    useEffect(() => {
        if(currentGuess === selectedNumber) {
            onGameOver(rounds);
        }
    }, [currentGuess,selectedNumber, onGameOver]);

    return (
        <View style={styles.container}>
          <Card style={styles.cardContent}>
            <Text style={styles.title}>Beat me</Text>
            <NumberContainer number={currentGuess} />
            <View style={styles.containerButton}>
                <Button
                    title="Lower"
                    onPress={() => onHandleNextGuess('lower')}
                    color={colors.buttons}
                />
                <Button
                    title="Greater"
                    onPress={() => onHandleNextGuess('greater')}
                    color={colors.buttons}
                />
            </View>
          </Card>
        </View>
    )
}

export default Game;

// style={styles.content}