import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";

const TwitterScreen = () => {
  const [tweets, setTweets] = useState([{
    id: 1,
    text: "This is a tweet",
    likes: 0,
    reposts: 0,
    video: null
  }, {
    id: 2,
    text: "Another tweet",
    likes: 0,
    reposts: 0,
    video: null
  }, {
    id: 3,
    text: "One more tweet",
    likes: 0,
    reposts: 0,
    video: null
  }]);
  const [newTweet, setNewTweet] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showProfile, setShowProfile] = useState(false);

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
        reposts: 0,
        video: null
      }]);
      setNewTweet("");
    }
  };

  const handleSearch = () => {// Perform search logic here
    // Set searchResults state with the search results
  };

  const handleProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleAddVideo = () => {// Implement logic to add video to tweet
  };

  const handleGoToProfile = () => {// Navigate to profile screen
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileButton} onPress={handleProfile}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.profileImage} />
        </TouchableOpacity>
        <Image source={require("./KK logo.jpg")} style={styles.logo} />
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search Twitter" value={searchQuery} onChangeText={text => setSearchQuery(text)} />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      {showProfile && <View style={styles.profileContainer}>
          <TouchableOpacity onPress={handleGoToProfile}>
            <Text style={styles.profileText}>Profile</Text>
          </TouchableOpacity>
          <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.profileImageSmall} />
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileBio}>Software Developer</Text>
        </View>}
      <View style={styles.content}>
        {tweets.map(tweet => <View key={tweet.id} style={styles.tweetContainer}>
            <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.tweetProfileImage} />
            <View style={styles.tweetContent}>
              <Text style={styles.tweetText}>{tweet.text}</Text>
              {tweet.video && <Image source={{
            uri: tweet.video
          }} style={styles.tweetVideo} />}
              <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(tweet.id)}>
                  <Text style={styles.actionButtonText}>Like</Text>
                  <Text style={styles.actionButtonCount}>{tweet.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={() => handleRepost(tweet.id)}>
                  <Text style={styles.actionButtonText}>Repost</Text>
                  <Text style={styles.actionButtonCount}>{tweet.reposts}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={() => handleAddVideo(tweet.id)}>
                  <Text style={styles.actionButtonText}>Add Video</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>)}
        <TextInput style={styles.input} placeholder="What's happening?" value={newTweet} onChangeText={text => setNewTweet(text)} />
        <TouchableOpacity style={styles.newPostButton} onPress={handleNewPost}>
          <Text style={styles.newPostButtonText}>Tweet</Text>
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
    height: 100,
    backgroundColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  logo: {
    width: 45,
    height: 43,
    marginLeft: 10
  },
  searchContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 10,
    flex: 1,
    marginRight: 10,
    backgroundColor: "#fff"
  },
  searchButton: {
    backgroundColor: "#1DA1F2",
    borderRadius: 20,
    padding: 10,
    alignItems: "center"
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  profileContainer: {
    alignItems: "center",
    padding: 10
  },
  profileText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  profileImage: {
    width: 68,
    height: 68,
    borderRadius: 34
  },
  profileImageSmall: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10
  },
  profileBio: {
    fontSize: 14,
    color: "#666",
    marginTop: 5
  },
  content: {
    flex: 1,
    padding: 10
  },
  profileButton: {
    alignItems: "center",
    marginRight: 10
  },
  tweetContainer: {
    flexDirection: "row",
    marginBottom: 10
  },
  tweetProfileImage: {
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
  tweetVideo: {
    width: "100%",
    height: 200,
    marginTop: 10
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
    borderRadius: 20,
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