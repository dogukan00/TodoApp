import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import Logo from './../../../assets/logo.svg';

// Header komponenti
const Header: React.FC = () => {
  // Logoyu içeren header'ın render edilmesi
  return (
    <View style={styles.container}>
      <Logo width={160} height={192} />
    </View>
  );
}

export default Header;
