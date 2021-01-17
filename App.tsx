import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { getAllUser } from './src/components/firebase'

import {
  Header,
} from './src/components/Export'
import {
  TimelineScreen,
  MyPageScreen,
  SearchScreen,
  NotificationScreen,
  LoginScreen,
  MyPageEditScreen,
  PostContentScreen,
} from './src/components/Screens'

/**
 * Stack
 */
const Stack = createStackNavigator()

/**
 * bottom-tab
 */
const Tab = createBottomTabNavigator()
function TabRouting({ navigation }: any) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Timeline" component={TimelineScreen}
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
  );
}

/**
 * Modal
 *
 */
const RootStack = createStackNavigator()
function ModalScreen({ navigation }: any) {
  return (
      <PostContentScreen />
  )
}

function MainStacK() {
  return (
    <Stack.Navigator initialRouteName="TabRouting">
      <Stack.Screen name="Tab" component={TabRouting} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

/****************************************
 * Render
 *****************************************/
{/*modalを使う場合にはMainの上に一つStackを増やして挙げないと行けない*/ }
{/* headerShownしないと2重にでる */ }
function App() {
  return (
    <>
      <Header />
      <NavigationContainer>
        <RootStack.Navigator mode='modal'>
          <RootStack.Screen name="Main" component={MainStacK} options={{ headerShown: false }} />
          <RootStack.Screen name="MyModal" component={ModalScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
})

export default App;
