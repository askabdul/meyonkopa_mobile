import React, {useEffect} from 'react';

import {StyleSheet, Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3000);
  }, []);

  return (
    <LinearGradient colors={['#ccc', '#eee']} style={{...styles.home, alignItems: "center",
    justifyContent: "center",
    shadowColor: '#707070',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 10,
    shadowOpacity: 0.6,}}>
        <Image
            source={require('./../images/logo_1.jpg')}
            resizeMode="contain"
            style={{width: 200,height: 200,borderRadius: 100,}}
        />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Splash