import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './Style'
import { LogoIcon } from '../../components/LogoImage/logoIcon';
import { ButtonPress } from '../../components/ButtonPress/ButtonPress';




export default function Home() {
  return (
    <View style={styles.HomeContainer}>
        
      <View style={styles.logoContainer}>  
        <LogoIcon />
      </View>
        
      <View style={styles.logoContainer}>  
        <ButtonPress />
      </View>
        
        <StatusBar style='auto' />
    </View>
  );
}