import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import IonIcon from 'react-native-vector-icons/Ionicons'

import {
  Header,
  PostCard
} from './src/components/Common'
import {
  MyPageScreen,
  ExampleScreen
} from './src/components/Screens'

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
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

const SearchScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}

const NotificationScreen = () => {
  return (
    <ScrollView>
      <ExampleScreen />
    </ScrollView>
  )
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
