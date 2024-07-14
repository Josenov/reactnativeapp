import { View, Text, Image } from 'react-native'
import React from 'react'
import {images} from '../constants'
import CustomButton from '../components/CustomButton'
import { router } from 'expo-router'

const EmptyState = ({title, subtitle}) => {
    return (
        <View className='justify-center items-center px-4'>
            <Image
            source={images.empty}
            className='w-[270px] h-[220px]'
            resizeMode='contain'
            />
            <Text className='font-psemibold text-2xl text-white mt-2'>{title}</Text>
            <Text className='font-pmedium text-sm text-gray-100'>{subtitle}</Text>
            
            
        </View>
    )
}

export default EmptyState