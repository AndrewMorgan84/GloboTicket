import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Home = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.globologo}
        source={require('./images/_Export_globoticket-bug-black.png')}
      />
      <Text style={styles.title}>Welcome TO GloboTicket</Text>
      <Text style={styles.subtitle}>{props.username}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.content}>{introText}</Text>
      </View>
    </View>
  );
};

const introText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  globologo: {
    height: 100,
    width: 150,
  },
  title: {
    fontFamily: 'Ubuntu-Regular',
    fontWeight: 'bold',
  },
  subtitle: {
    paddingTop: 5,
    fontFamily: 'Ubuntu-Regular',
    fontWeight: 'bold',
  },
  textContainer: {
    textAlign: 'center',
    paddingTop: 10,
  },
  content: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '300',
  },
});

export default Home;
