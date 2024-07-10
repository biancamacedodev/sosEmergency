import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { styles } from './ButtonPressStyles';

export function ButtonPress() {
  return (
    <View>
        <Pressable style={styles.button} onPress={() => console.log('clicado button press')}>
            <Text  style={styles.text}>Activate!</Text>    
        </Pressable>
    </View>
  );
}