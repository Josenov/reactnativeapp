
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function App() {
    return (
        <View className='flex-1 items-center justify-center bg-[#fafafa]'>
            <Text className='text-2xl font-pblack' >Hola Mundo!</Text>
            <StatusBar style="auto" />
            <Link className='text-xl text-blue-400 font-semibold' href= '/home' >Go To Home</Link>
        </View>
    );
}

