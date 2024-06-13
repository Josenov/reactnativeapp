
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function App() {
    return (
        <View className='flex-1 items-center justify-center bg-yellow-400'>
            <Text className='text-2xl font-bold' >Hola Mundo de React Native!</Text>
            <StatusBar style="auto" />
            <Link className='text-xl text-blue-400 font-semibold' href= '/Profile' >Go To Profile</Link>
        </View>
    );
}

