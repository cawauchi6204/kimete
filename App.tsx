import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { getAllUser } from './src/components/firebase'

import {
  Header,
  PostCard
} from './src/components/Common'
import {
  MyPageScreen,
  ExampleScreen,
  SearchScreen,
  NotificationScreen,
  LoginScreen,
  MyPageEditScreen
} from './src/components/Screens'

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ExampleScreen />
      <Button onPress={() => console.log(getAllUser())}>Press me</Button>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Header />
      </View>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}
            options={{
              tabBarIcon: () => (
                <FontistoIcon name="home" size={30} />
              )
            }}
          />
          <Tab.Screen name="Search" component={SearchScreen}
            options={{
              tabBarIcon: () => (
                <IonIcon name="ios-search-sharp" size={30} />
              )
            }}
          />
          <Tab.Screen name="Notification" component={NotificationScreen}
            options={{
              tabBarIcon: () => (
                <IonIcon name="ios-notifications" size={30} />
              )
            }}
          />
          <Tab.Screen name="MyPage" component={MyPageScreen}
            options={{
              tabBarIcon: () => (
                <IonIcon name="ios-person-circle-sharp" size={30} />
              )
            }} />
          <Tab.Screen name="MyPageEdit" component={MyPageEditScreen}
            options={{
              tabBarIcon: () => (
                <IonIcon name="ios-person-circle-sharp" size={30} />
              )
            }} />
          {/* <Tab.Screen name="Login" component={LoginScreen}
            options={{
              tabBarIcon: () => (
                <IonIcon name="ios-person-circle-sharp" size={30} />
              )
            }} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 30,
    marginLeft: 30
  },
});
