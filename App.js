import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {

  useEffect(()=>{
    requestUserPermission()
  },[])

  const[FcmToken,setFcmToken] = useState()

    console.log("==>",FcmToken)


  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status: ======>', authStatus);
      getToken()
    }
  }

  const getToken = async () => {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        setFcmToken(fcmToken)
      }
    } catch (error) {
      console.log(error, 'error raised in fcm token');
    }

  }
  return (
    <SafeAreaView>
      <View>
        <Text>Anas</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
