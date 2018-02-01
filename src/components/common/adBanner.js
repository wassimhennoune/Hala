import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View

} from 'react-native';



const AdBanner = ({ style, title, children, ...props }) => (
  <View {...props} style={[styles.example, style]}>
    <Text style={styles.title}>{title}</Text>
    <View>
      {children}
    </View>
  </View>
);

const bannerWidths = [200, 250, 320];
const styles = StyleSheet.create({
    
    example: {
      paddingVertical: 10,
    }
  });
  
export { AdBanner };