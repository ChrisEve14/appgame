import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import { Card } from '../../components';
import colors from '../../constants/colors';
import {styles} from './styles';

const GameOver = ({rounds, selectedNumber, onRestart}) => {
    return (
        <View style={styles.container}>
           <Card style={styles.content}>
                <Image 
                source={{ uri: 'https://img.freepik.com/vector-gratis/fondo-game-over-distorsion_52683-3535.jpg?w=740&t=st=1669168844~exp=1669169444~hmac=e0bcd395aa0df0b313b6b7e8810a7c61a88876bd2f36fc0cf9e72ac19e2121cc'}} 
                style={styles.image} />
                <Text style={styles.textContent}>Rounds: {rounds}</Text>
                <Text style={styles.textContent}>Picked Number: {selectedNumber}</Text>
                <Button 
                    title="Restart"
                    onPress={onRestart}
                    color={colors.buttons}
                />
           </Card>
        </View>
    )
}

export default GameOver;


