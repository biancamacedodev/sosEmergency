import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './logoStyles';
import imageSos from '../../../assets/sosIcon.png'

export function LogoIcon() {
  return (
    <View>
       <Image source={imageSos} style={styles.image} />
    </View>
  );
}