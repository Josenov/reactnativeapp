import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import { searchPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'
import { useLocalSearchParams } from 'expo-router'



const Bookmark = () => {

    const { query } = useLocalSearchParams();

    const { data: posts, refetch } = useAppwrite(()=> searchPosts(query))


    useEffect(() => {

        refetch()

    }, [query])






    return (
        <SafeAreaView className='bg-primary  h-full'>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => (
                    <VideoCard
                        video={item}
                    />
                )}
                ListHeaderComponent={() => (
                    <View className='my-6 px-4'>

                        <Text className='text-white text-2xl font-psemibold'>Saved Videos</Text>
                        <Text className='font-psemibold text-2xl text-white'>{query}</Text>
                        <View className='mt-6 mb-8'>
                            <SearchInput
                                initialQuery={query}
                                placeholder='Search for a video you liked'
                            />
                        </View>


                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                        title='No videos saved'
                        subtitle='Save videos that you like'

                    />
                )}


            />
        </SafeAreaView>
    )
}

export default Bookmark