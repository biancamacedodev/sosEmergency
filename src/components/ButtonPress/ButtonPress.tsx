import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './ButtonPressStyles';

import { useNavigation } from '@react-navigation/native';

export function ButtonPress() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View>
      <TouchableOpacity onPress={() => {navigation.navigate('Form')}}>
              <Text  style={styles.button}>Activate!</Text>    
      </TouchableOpacity>
          
      </View>
    </ScrollView>
  
  );
}