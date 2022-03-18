import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

 const requestUserPermission = () => {

    async () => {
    
        const authStatus = await messaging().requestPermission();
        const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        
        if (enabled) {
            console.log('Authorization status:', authStatus);
            GetFCMToken();
        }
        
    } 

}

function GetFCMToken() {
    
    let FcmToken = await AsyncStorage.getItem("fcmtoken")
    
    console.log("fcm token old ==>",FcmToken)

    if (!FcmToken) {

        try{
            if (FcmToken) {
                console.log("fcm token new ==",FcmToken)
                await AsyncStorage.setItem("fcmtoken",FcmToken)
            }
        }
        catch(error){
            console.log("error in fcm token",error)
        }
        
    } else {
        
    }

}