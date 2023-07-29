import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, View, Text } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to My App</Text>
          
          <Text style={styles.instructions}>
            Follow the instructions below to get started:
          </Text>
          <Text style={styles.step}>Step 1: Sign up for an account</Text>
          <Text style={styles.step}>Step 2: Complete your profile</Text>
          <Text style={styles.step}>Step 3: Explore the app features</Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  instructions: {
    fontSize: 18,
    marginBottom: 10
  },
  step: {
    fontSize: 16,
    marginBottom: 5
  }
});
export default Untitled4;