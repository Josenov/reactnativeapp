import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='Home' options={{headerShown:false}}/>
        </Stack>
    )
    

}

export default RootLayout


