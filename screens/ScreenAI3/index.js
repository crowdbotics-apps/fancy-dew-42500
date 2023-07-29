import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";

const TwitterScreen = () => {
  const [tweets, setTweets] = useState([{
    id: 1,
    text: "This is a tweet",
    likes: 0,
    reposts: 0
  }, {
    id: 2,
    text: "Another tweet",
    likes: 0,
    reposts: 0
  }, {
    id: 3,
    text: "One more tweet",
    likes: 0,
    reposts: 0
  }]);
  const [newTweet, setNewTweet] = useState("");

  const handleLike = id => {
    setTweets(prevTweets => prevTweets.map(tweet => tweet.id === id ? { ...tweet,
      likes: tweet.likes + 1
    } : tweet));
  };

  const handleRepost = id => {
    setTweets(prevTweets => prevTweets.map(tweet => tweet.id === id ? { ...tweet,
      reposts: tweet.reposts + 1
    } : tweet));
  };

  const handleNewPost = () => {
    if (newTweet.trim() !== "") {
      setTweets(prevTweets => [...prevTweets, {
        id: prevTweets.length + 1,
        text: newTweet,
        likes: 0,
        reposts: 0
      }]);
      setNewTweet("");
    }
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>KK Media</Text>
      </View>
      <View style={styles.content}>
        {tweets.map(tweet => <View key={tweet.id} style={styles.tweetContainer}>
            <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.profileImage} />
            <View style={styles.tweetContent}>
              <Text style={styles.tweetText}>{tweet.text}</Text>
              <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(tweet.id)}>
                  <Text style={styles.actionButtonText}>Like</Text>
                  <Text style={styles.actionButtonCount}>{tweet.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={() => handleRepost(tweet.id)}>
                  <Text style={styles.actionButtonText}>Repost</Text>
                  <Text style={styles.actionButtonCount}>{tweet.reposts}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>)}
        <TextInput style={styles.input} placeholder="Type your tweet here" value={newTweet} onChangeText={text => setNewTweet(text)} />
        <TouchableOpacity style={styles.newPostButton} onPress={handleNewPost}>
          <Text style={styles.newPostButtonText}>New Post</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    height: 50,
    backgroundColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  content: {
    flex: 1,
    padding: 10
  },
  tweetContainer: {
    flexDirection: "row",
    marginBottom: 10
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  tweetContent: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center"
  },
  tweetText: {
    fontSize: 16
  },
  actionsContainer: {
    flexDirection: "row",
    marginTop: 5
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10
  },
  actionButtonText: {
    fontSize: 14,
    marginRight: 5
  },
  actionButtonCount: {
    fontSize: 14,
    fontWeight: "bold"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  newPostButton: {
    backgroundColor: "#1DA1F2",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    marginTop: 10
  },
  newPostButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
export default TwitterScreen;