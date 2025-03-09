import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';

const GlossyButton = ({
//   title,
  onPress,
  width = 55,
  height = 55,
  borderRadius = 55,
  primaryColor = '#ff4081',
  secondaryColor = '#f50057',
//   textColor = '#ffffff',
//   fontSize = 16,
//   fontWeight = 'bold',
  disabled = false,
  icon,
}) => {

  const baseColor = disabled ? '#cccccc' : primaryColor;
  const highlightColor = disabled ? '#bbbbbb' : secondaryColor;
  //   const buttonTextColor = disabled ? '#888888' : textColor;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      style={[styles.buttonContainer, {width, height, borderRadius}]}>
      <LinearGradient
        colors={[highlightColor, baseColor]}
        style={[styles.gradientBase, {borderRadius}]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <View
          style={[
            styles.glossyOverlay,
            {
              borderTopLeftRadius: borderRadius,
              borderTopRightRadius: borderRadius,
            },
          ]}>
          <LinearGradient
            colors={['rgba(255,255,255,0.7)', 'rgba(255,255,255,0.0)']}
            style={styles.highlightGradient}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
          />
        </View>
        {icon}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  gradientBase: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  glossyOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    overflow: 'hidden',
  },
  highlightGradient: {
    flex: 1,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
  },
});

export default GlossyButton;
