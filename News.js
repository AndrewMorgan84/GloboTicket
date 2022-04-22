import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';

const News = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [storyData, setStoryData] = useState();

  const getNews = async () => {
    try {
      let response = await fetch(
        'https://jsonplaceholder.typicode.com/albums/1/photos',
      );
      let stories = await response.json();
      setStoryData(stories);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const newsItem = ({item}) => {
    return (
      <View style={styles.storyList}>
        <Image style={styles.thumb} source={{uri: item.uri}} />
        <Text style={styles.storyText}>{item.title}</Text>
        <Text style={styles.storyText}>{item.url}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {!isLoaded ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={storyData}
          renderItem={newsItem}
          keyExtractor={item => item.title}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  storyList: {
    paddingBottom: 20,
  },
  thumb: {
    height: 100,
    width: '100%',
  },
  storyText: {
    padding: 10,
  },
  container: {
    paddingTop: 20,
  },
});

export default News;
